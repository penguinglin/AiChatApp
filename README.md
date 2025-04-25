# AWS App

## intro file of react

1. [react入門](https://kknews.cc/zh-tw/news/9zn58b5.html)
2. [猴子也能看懂的 React](https://j6qup3.github.io/2016/08/06/%E7%8C%B4%E5%AD%90%E4%B9%9F%E8%83%BD%E7%9C%8B%E6%87%82%E7%9A%84-React-%E6%95%99%E5%AD%B8-1/)
3. [firrbase]()


## App 前端建立、後台管理


|功能 | Firebase | 搬遷目標（AWS） | 遷移方式|
|-----|-------|-------|---------|
|登入驗證 | Firebase Auth | AWS Cognito | 匯出使用者資料到 Cognito|
|資料儲存 | Firestore | AWS DynamoDB / RDS | 批次導出 Firestore 資料，用程式轉換結構寫入 DynamoDB|
|雲端函式 | Firebase Functions | AWS Lambda | 將原來的函式轉成 Lambda，接 API Gateway|
|檔案存取 | Firebase Storage | AWS S3 | 移動檔案到 S3，調整 URL 路徑|



