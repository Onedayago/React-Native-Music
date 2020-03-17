### 图片展示
![输入图片说明](https://images.gitee.com/uploads/images/2020/0317/164900_6228db23_2093191.gif "Mar-17-2020 16-48-47.gif")
![输入图片说明](https://images.gitee.com/uploads/images/2020/0317/164539_fe224162_2093191.gif "Mar-17-2020 16-45-21.gif")
![输入图片说明](https://images.gitee.com/uploads/images/2020/0317/164632_7a6c3033_2093191.gif "Mar-17-2020 16-46-18.gif")
### 技术栈
1. react-native 0.57.7 主要技术
2. redux 状态管理
3. react-redux redux 插件
4. axios 网络请求
5. immutable redux 对象储存
6. react-navigation 路由
7. redux-persist 持久化
8. react-native-sound 音乐播放
9. lyric-parser 歌词解析
10. react-native-scrollable-tab-view  tab 切换   这里有坑，最后我用了 ^0.10.0 版本才行
11. react-native-video 视频播放（但是在列表里全屏有问题，目前我要去自己封装一个播放器）

### 安装说明
1. yarn install
2. 使用 xcode 打开 ios 工程， 然后运行
3. 暂时没有调试安卓端

### 开发工具
1. xcode
2. webstorm

### 调试工具
1. reactotron

### UI 组件库
1. react-native-elements

### 已完成的功能
1. 登录页 UI 的绘制
2. 登录页 logo 动画
3. 手机号登录页


### 未解决的问题 
1. 登录页中国家和地区区号选择 modal 中 手势响应的问题 （尝试使用 react navigation 中的 modal 解决问题但是失败了,还是达不到网易效果）
2. 音乐播放界面当手动滑动进度条到最后时播放出现问题
3. 歌单广场 tab 导航样式 （需要自定义）
4. 标签选择页(已找到插件，但功能与网易云音乐上的有些不同)
5. 首页 tab 导航样式（需要自定义）
