import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row, Select } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import orderService from '../../../services/seller/order';
import { setRefetch } from '../../../redux/slices/menu';
import { useTranslation } from 'react-i18next';
import userService from 'services/seller/user';
import { DebounceSelect } from 'components/search';

export default function OrderDeliveryman({ orderDetails: data, handleCancel }) {
  const { t } = useTranslation();
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    const params = { deliveryman: values.deliveryman.value };
    setLoading(true);
    orderService
      .updateDelivery(data.id, params)
      .then(() => {
        handleCancel();
        dispatch(setRefetch(activeMenu));
      })
      .finally(() => setLoading(false));
  };

  const fetchDelivery = (search) => {
    const data = { search, role: 'deliveryman' };
    return userService.getDeliverymans(data).then((res) =>
      res.data.map((item) => ({
        label: item.firstname + ' ' + item.lastname,
        value: item.id,
      }))
    );
  };

  console.log(activeMenu.data?.deliveryman);
  return (
    <Modal
      visible={!!data}
      title={data.title}
      onCancel={handleCancel}
      footer={[
        <Button type='primary' onClick={() => form.submit()} loading={loading}>
          {t('save')}
        </Button>,
        <Button type='default' onClick={handleCancel}>
          {t('cancel')}
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{
          deliveryman: activeMenu.data?.deliveryman?.firstname
            ? {
                label: `${activeMenu.data?.deliveryman?.firstname || ''} ${
                  activeMenu.data?.deliveryman?.lastname || ''
                }`,
                value: activeMenu.data?.deliveryman?.id,
              }
            : null,
        }}
      >
        <Row gutter={12}>
          <Col span={24}>
            <Form.Item
              label={t('deliveryman')}
              name='deliveryman'
              rules={[
                {
                  required: true,
                  message: t('required'),
                },
              ]}
            >
              <DebounceSelect
                className='w-100'
                debounceTimeout={500}
                placeholder={t('select.deliveryman')}
                fetchOptions={fetchDelivery}
                allowClear={true}
                value={{
                  label:
                    activeMenu.data?.deliveryman?.firstname +
                    ' ' +
                    activeMenu.data?.deliveryman?.lastname,
                  value: activeMenu.data?.deliveryman?.id,
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
