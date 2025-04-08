import React, { useState, useCallback } from 'react';
import { Tabs, Modal, Image } from 'antd';
import UploadMedia from './upload-media';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import getImage from '../../helpers/getImage';
import ImageGallery from '../image-gallery';

const MediaUpload = ({
  imageList,
  setImageList,
  form,
  type,
  multiple = true,
  name,
  disabled = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('item-1');

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  
  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const removeImg = useCallback((path) => {
    if (disabled) return;
    const nextArray = imageList.filter((item) => item !== path);
    form.setFieldsValue({
      images: nextArray,
    });
    setImageList(nextArray);
  }, [disabled, imageList, form, setImageList]);

  const handleTabChange = useCallback((key) => {
    setActiveTab(key);
  }, []);

  return (
    <>
      <div className='media-upload-wrapper'>
        {imageList?.map((item) => (
          <div
            key={item}
            className='image-wrapper'
            onClick={() => removeImg(item)}
            role="button"
            tabIndex={0}
            aria-label="Remove image"
          >
            <Image
              preview={false}
              src={getImage(item?.name)}
              className='images'
              alt={'Uploaded image'}
            />
            {!disabled && <DeleteOutlined aria-hidden="true" />}
          </div>
        ))}
        {(multiple || !imageList.length) && !disabled && (
          <div 
            className='media-upload' 
            onClick={showModal}
            role="button"
            tabIndex={0}
            aria-label="Upload media"
          >
            <PlusOutlined aria-hidden="true" /> <span>Upload</span>
          </div>
        )}
      </div>
      <Modal
        onCancel={handleCancel}
        maskClosable={true}
        visible={isModalOpen}
        footer={null}
        width={'80%'}
        destroyOnClose
        // Ajout d'attributs d'accessibilité
        aria-labelledby="media-upload-modal-title"
      >
        <h2 id="media-upload-modal-title" className="sr-only">Media Upload</h2>
        <Tabs 
          activeKey={activeTab}
          onChange={handleTabChange}
          // Options d'accessibilité
          tabBarGutter={10}
          accessibility={{
            hideOnBlur: false
          }}
        >
          <Tabs.TabPane 
            tab='Media files' 
            key='item-1'
            forceRender
          >
            <UploadMedia
              form={form}
              setImageList={setImageList}
              imageList={imageList}
              setIsModalOpen={setIsModalOpen}
              name={name}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab='Upload media'
            key='item-2'
            className='upload-media'
            forceRender
          >
            <ImageGallery
              type={type}
              disabled={false}
              form={form}
              setFileList={setImageList}
              fileList={imageList}
              setIsModalOpen={setIsModalOpen}
            />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default React.memo(MediaUpload);