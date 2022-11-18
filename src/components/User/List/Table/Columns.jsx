import React from 'react'

export const userColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '名称',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  }
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   key: 'status',
  //   render: status => (
  //     <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
  //       {status === 1 ? '正常' : '隐藏'}
  //     </Tag>
  //   )
  // }
]
