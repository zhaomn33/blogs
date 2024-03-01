---
title: Socket
author: 赵三三
date: '2024-3-1'
sidebar: auto
tags:
 - socket
categories:
 - JS
---

::: tip
Socket使用，以文件上传为例
:::

### 一、Socket连接
```
  // 初始化
  useEffect(() => {
    // 连接 websocket
    useSocket.open()
    // 处理从服务器接收的消息
    useSocket.on('upload', socketFun)
    // 加入 websocket 房间 - 和后端对接
    useSocket.emit(
      'upload',
      {
        'event_type': 'upload'
      }
    )

    return () => {
      // 在组件卸载时断开 WebSocket 连接
      useSocket.disconnect()
      useSocket.off('upload', socketFun)
    }
  }, [socketFun])
```
### 二、Socket信息处理
```
  // socket处理信息
  const socketFun = useCallback((...args: {
    data: UploadFileInit[],
    error: number,
    msg: any
  }[]) => {
    const { data, error } = args[0]
    // 此处可以对数据进行处理，并获取想要的信息
  }, [])
```