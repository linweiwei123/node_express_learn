1.pm2 + winston 日志输出
2.严重错误发送邮件通知
3.集群部署 + socket问题
    三种解决方式 ：（1）nginx ip_hash代理 + pm2 cluster模式（已经实现）
                 （2）pm2 fork模式 + node.js cluster 模块
                 （3）redis 共享session（难）
4.mysql，mongoDB数据库持久化