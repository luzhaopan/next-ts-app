'use client'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation'

export default function MenuBar() {
  const router = useRouter()
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: [],
    type?: 'group',
  ) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items: any[] = [
    getItem('Home', '/', <UserOutlined />),
    getItem('Dashboard', '/dashboard', <VideoCameraOutlined />),
    getItem('Login', '/login', <UploadOutlined />),
  ];

  const onClick = (e: any) => {
    router.push(e.key)
  };

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={items}
    />
  )
}
