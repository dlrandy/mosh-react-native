离线策略：
1.通知用户
2.取消某些特性
3.缓存数据
4.存储用户行为

目前项目里手动实现不适合复杂的项目，
因为复杂的项目可能会要求
1. optimistic updates
2. retrying action
3. conflict resolution

对于复杂项目可以使用实时数据库或者cloud（realme）

Authentication providers
1. Amplify by amazon
2. Firebase by google
3. Auth0

react context
适合共享一些不常改变的小对象；

redux
适合共享一些经常改变的大对象；