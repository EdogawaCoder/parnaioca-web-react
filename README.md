Hotel Parnaioca — Web Frontend
English version below | 日本語版は下にあります

-------------------------------------
English
-------------------------------------

Hotel Parnaioca — Web Frontend

A modern and responsive frontend built with React 19 and TypeScript for the Hotel Parnaioca system.
This interface manages the authentication flow, dashboard visualization, and user management, featuring a modular structure that follows the Atomic Design pattern.

-------------------------------------
Repository
-------------------------------------
https://github.com/EdogawaCoder/parnaioca-web-react

-------------------------------------
Tech Stack
-------------------------------------
- React 19 + TypeScript
- Next.js 14 (App Router)
- Material UI (MUI 6)
- React Icons
- ESLint + Prettier
- Atomic Design Structure (Atoms → Molecules → Organisms)

-------------------------------------
Folder Structure
-------------------------------------
src/
 ├── app/
 │   ├── (guest)/auth/login/   → Public routes (Login)
 │   ├── (auth)/dashboard/     → Protected routes (Dashboard)
 │   ├── (auth)/users/         → User management
 │   └── (auth)/layout.tsx     → Authenticated layout
 ├── components/
 │   ├── atoms/                → Base UI elements (Input, Label)
 │   ├── molecules/            → Small UI groups (Field, MenuCard)
 │   ├── organisms/            → Larger components (Menu, Navbar)
 ├── hooks/                    → Custom hooks (useAuth)
 └── ...

-------------------------------------
Features
-------------------------------------
- Authentication layout (guest and auth separated)
- Styled Navbar and Menu components
- Atomic Design structure for scalability
- Theme customization via Material UI
- Responsive design

-------------------------------------
Installation
-------------------------------------
1. Clone the repository
   git clone https://github.com/EdogawaCoder/parnaioca-web-react

2. Enter the project folder
   cd parnaioca-web-react

3. Install dependencies
   npm install

4. Run the development server
   npm run dev

Then open http://localhost:3000


-------------------------------------
日本語版
-------------------------------------

ホテル・パルナイオカ — Webフロントエンド

このプロジェクトは React 19 と TypeScript を使用して構築された、
ホテル・パルナイオカ管理システムのモダンでレスポンシブなフロントエンドです。
ログイン／認証、ダッシュボード表示、ユーザー管理などをサポートし、
Atomic Design（原子デザイン）構造に基づいたコンポーネント設計を採用しています。

-------------------------------------
リポジトリ
-------------------------------------
https://github.com/EdogawaCoder/parnaioca-web-react

-------------------------------------
技術スタック
-------------------------------------
- React 19 + TypeScript
- Next.js 14（App Router）
- Material UI (MUI 6)
- React Icons
- ESLint + Prettier
- Atomic Design 構造

-------------------------------------
フォルダ構成
-------------------------------------
src/
 ├── app/
 │   ├── (guest)/auth/login/   → 公開ページ（ログイン）
 │   ├── (auth)/dashboard/     → 保護されたページ（ダッシュボード）
 │   ├── (auth)/users/         → ユーザー管理ページ
 │   └── (auth)/layout.tsx     → 認証済みレイアウト
 ├── components/
 │   ├── atoms/                → 基本UI要素（Input、Labelなど）
 │   ├── molecules/            → 小規模UIグループ（Field、MenuCardなど）
 │   ├── organisms/            → 大規模コンポーネント（Menu、Navbarなど）
 ├── hooks/                    → カスタムフック（useAuth）
 └── ...

-------------------------------------
主な機能
-------------------------------------
- 認証レイアウト（guest / auth 分離）
- Navbar と Menu のスタイリング
- Atomic Design による再利用性の高い設計
- Material UI によるテーマカスタマイズ
- レスポンシブ対応

-------------------------------------
インストール方法
-------------------------------------
1. リポジトリをクローン
   git clone https://github.com/EdogawaCoder/parnaioca-web-react

2. ディレクトリへ移動
   cd parnaioca-web-react

3. 依存関係をインストール
   npm install

4. 開発サーバーを起動
   npm run dev

ブラウザで http://localhost:3000 を開いてください。
