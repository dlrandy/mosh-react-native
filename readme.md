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

push notification providers
1. expo push notification service
2. one signal
3. firebase cloud MESSING
4. Amazon simple notification service(sns)

expo push notification:
1. register the app to get a token
2. store token on the server
3. send a notification
4. handle received notification

AppIcon
png
1024 * 1024 （expo build service 自动生成其他的）
follow applw/android guidelines
sharp-cli -> npx expo-optimize
js lib

Error reporting tools
sentry
Bugsnag
   report errors
   attach diagnostic data
   identify users
   MOnitor releases

If you want to automate your app deployment, consider FastLane:

https://fastlane.tools/

This blog posts shows how you can use Fastlane to deploy Expo apps:

https://blog.expo.io/automating-standalone-expo-app-builds-and-deployments-with-fastlane-exp-and-exptool-9b2f5ad0a2cd






