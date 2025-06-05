# 🍳 Recipe Memo App

料理好きな人のためのレシピ管理アプリです。  
お気に入りのレシピを簡単に記録・検索・分類できるモバイル向けアプリを目指して開発しました。
Udemyの教材をもとに制作。
Udemyのリンク（https://www.udemy.com/share/101YPo3@D4A9TxRKABRckPgOaj9ZI76gAzi5p1vKm3J1EnIxqjWDn-SX18u3adIbrOHKPU4FIg==/）

---

## 📱 アプリ概要

- よく使うレシピは上位に表示（クリック数に応じたランキング）
- 材料名でレシピ検索
- 栄養計算（外部API連携予定）
- カメラからの画像登録 or 手動アップロード
- レシピのお気に入り登録
- カテゴリ別の分類（主菜、副菜、主食など）
- Firebase認証でログイン機能実装

---

## 🎥 デモ
- [スクリーンショット](./images/recipe-top.png)

---

## 🛠 使用技術・ライブラリ

| 分類 | 技術 |
|--|--|
| フロントエンド | React Native (Expo), TypeScript |
| 認証 | Firebase Authentication |
| 状態管理 | useState / useEffect |
| デプロイ | Expo Go（モバイル） |
| その他 | ESLint, Prettier など

---

## 📁 ディレクトリ構成（例）

recipe-memo/
 src/
   app/
     memo/
       Detaill.tsx
       List.tsx
      _layout.tsx
      .gitkeep
      index.tsx
   components/
     .gitkeep
     CircleButton.tsx
     Header.tsx
     MemoListItem.tsx
