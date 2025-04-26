# AWS App

## intro file of react

1. [react入門](https://kknews.cc/zh-tw/news/9zn58b5.html)
2. [猴子也能看懂的 React](https://j6qup3.github.io/2016/08/06/%E7%8C%B4%E5%AD%90%E4%B9%9F%E8%83%BD%E7%9C%8B%E6%87%82%E7%9A%84-React-%E6%95%99%E5%AD%B8-1/)
3. [firrbase]()


## App 前端建立、後台管理

* Fast setup the webApp

```
npm create vite@latest awsApp -- --template react
cd .\awsApp\
npm install
npm run dev
```

* The structure of the app

```
awsApp/         
├── public/
│   └── img                 # 存放靜態資源如圖片
├── src/
│   ├── assets/             # 音樂、圖片等資源
│   │   └── music/          # 存放音樂檔案
│   │   └── img/            # 其他圖片等
│   ├── components/         # 單一元件，如聊天框、輸入框等
│   │   ├── ChatWindow.jsx
│   │   ├── ChatInput.jsx
│   │   └── HeaderIcons.jsx
│   ├── pages/              # 每一頁的 React 元件
│   │   ├── LoginPage.jsx
│   │   ├── MainPage.jsx
│   │   ├── SettingsPage.jsx
│   │   └── ProfilePage.jsx
│   ├── contexts/           # 管理全域狀態，如登入狀態、音效狀態
│   │   ├── AuthContext.jsx
│   │   └── AudioContext.jsx
│   ├── services/           # 和後端 API 交互的邏輯
│   │   ├── firebase.js
│   │   └── aiAPI.js
│   ├── utils/              # 工具類函數或資料，像是語言清單等
│   │   └── languageOptions.js
│   ├── App.jsx             # 主 App 元件
│   ├── App.css             # 主樣式
│   ├── Main.jsx            # 項目的進入點
│   └── Index.css           # 其他通用樣式
├── Index.html              # HTML 模板
├── package.json            # 專案依賴和設置
└── package-lock.json       # 精確版本控制
```


## Build the project

| **目標**                     | **要做的事情**                                                                 |
|----------------------------|-------------------------------------------------------------------------------|
| **1. 設計頁面結構**              | - 設計並實作 `LoginPage.jsx` (登入頁)                                            |
|                              |   - 設置登入表單（Email 和 Password）                                        |
|                              |   - 實現登入功能，登入成功後跳轉到 `MainPage.jsx`                               |
|                              | - 設計並實作 `MainPage.jsx` (主頁面)                                            |
|                              |   - 頁面包含 `ChatWindow` 和 `ChatInput`                                       |
|                              |   - 加入 Header，顯示設定和個人資料圖示                                        |
|                              | - 設計並實作 `SettingsPage.jsx` (設定頁面)                                     |
|                              |   - 提供音效和音樂的音量調整選項                                               |
|                              | - 設計並實作 `ProfilePage.jsx` (個人資料頁面)                                 |
|                              |   - 顯示用戶名稱、生日、自我介紹等資訊                                        |
|                              |   - 加入登出按鈕                                                               |
| **2. 拆分元件**                 | - 將每一個功能拆分為獨立的元件                                               |
|                              |   - `ChatWindow.jsx`：顯示訊息的聊天框                                          |
|                              |   - `ChatInput.jsx`：用戶輸入訊息的框                                            |
|                              |   - `HeaderIcons.jsx`：顯示設定和個人資料圖示（右上角）                       |
| **3. Firebase 登入邏輯**         | - 在 `services/firebase.js` 中設置 Firebase 初始化及登入邏輯                    |
|                              |   - 實現用戶登入功能，使用 Firebase 的 `signInWithEmailAndPassword`              |
|                              |   - 登入成功後儲存用戶狀態（例如：user, isAuthenticated 等）                       |
|                              | - 在 `contexts/AuthContext.jsx` 中創建 Auth Context，管理用戶登入狀態            |
| **4. 音效與音樂管理**            | - 在 `contexts/AudioContext.jsx` 中管理音樂與音效的狀態                          |
|                              |   - 使用 `useState` 和 `useEffect` 管理音量和音效開關                             |
|                              | - 在 `SettingsPage.jsx` 中設計音樂和音效控制界面（如：音量滑桿、開關等）         |
| **5. 與 AI API 交互**           | - 在 `services/aiAPI.js` 中設置 AI API 呼叫邏輯                                |
|                              |   - 實現一個簡單的函數來發送用戶輸入並接收 AI 回應（如：對話生成）                |
| **6. 應用路由和導航設置**        | - 使用 `react-router-dom` 設置頁面導航                                         |
|                              |   - 在 `App.jsx` 中設置不同頁面的路由                                         |
|                              |   - 確保登入後跳轉到主頁，設定頁面、個人資料頁面等能夠正常導航                  |
| **7. 音樂播放功能**              | - 在 `App.jsx` 或 `MainPage.jsx` 中設置背景音樂播放功能                          |
|                              |   - 加入背景音樂播放的 UI 控制，例如暫停、播放、音量調整等                     |
| **8. 應用 UI 設計與樣式**        | - 設計整體 UI 風格，使用 `App.css` 或單獨的樣式檔來調整外觀                     |
|                              | - 在 `App.css` 或 `index.css` 中設置全局樣式，如字型、顏色、背景等               |
| **9. 簡單測試與除錯**            | - 測試所有頁面功能是否正確運行                                               |
|                              |   - 測試登入、導航、音效、音樂控制等功能                                       |
|                              |   - 檢查用戶狀態是否正確保持（登入狀態）                                       |
| **10. 上傳至 GitHub**            | - 完成程式碼後，推送到 GitHub 上                                                |
|                              |   - 確保專案可以順利運行並上傳代碼到 GitHub                                     |

---
