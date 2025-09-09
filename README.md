\# memo-app



\## 概要



このプロジェクトは、簡易的なメモ機能を実現するためのものでReact native + Firebaseを用いています。SignUp/LogIn機能やメモの作成、保存、削除、編集を備えています。



\## インストール



1\. Android アプリのインストール方法

&nbsp;  以下から APK をダウンロードしてインストールできます。

&nbsp; https:/drive.google.com/file/d/12Lu0L/_J6WrxEZo0YBmx6A29G6/_JdITU1/view?usp=drive/_link

　　Android端末にコピーして実行するとインストールされます。  

&nbsp;  ※ 「提供元不明のアプリ」を許可する必要があります。



2\. リポジトリをクローンして依存関係をインストールしてください（Iosの方）

　```bash

　https:/github.com/yamamotoreina/memo-app-1.git　
　cd memo-app-1

  npm install
  npm start





\## 使い方



1. アプリを開くとログイン画面が表示されます。
   ! \[ログイン画面] (./images/LogIn.png)
2. ログイン画面にあるsign\_upリンクを押すとアカウントを作成できます。
   ! \[サインアップ画面] (./images/SignUp.png)
3. ログイン後メモの一覧画面が表示されます。
   ! \[メモの一覧] (./images/MemoList.png)
4. 右下の＋ボタンをクリックすると新規作成画面にうつります。
   ! \[新規作成] (./images/MemoCreateNew.png)
5. 作成後チェックボタンを押すと新規が作成されます。
   ! \[新規作成後] (./images/MemoListAdd.png)
6. 作成後のメモを編集するにはメモを開きペンシルボタンを押すと編集できます。
   ! \[編集画面] (./images/MemoDetail.png)



\## 運用



* デプロイはしていません。ローカルとExpoGoにて動作確認。
* android版はExpo EAS Buildで生成した.apkを配布しています。
* ブランチ運用

　　main: 完了済みコード

　　develop/: 機能ごとの開発用ブランチ



\##　使用技術



* React, ReactNative  19.0.0
* React, HooksFunctionComponent
* React-Navigation
* Expo SDK-53
* Javascript
* ESLint
* Firebase Authentication
* Cloud Firebase
* Figma
* JDK-17
* Gradle-7.6.5



\## ライセンス



本プロジェクトは MIT License の下で公開しています。



本アプリは Udemy 講座「ReactNative,Firebase,Expoでアプリ開発をゼロから始めよう！」を学習した際に、自分で実装したものです。
今後新規の機能として「通知機能」やリトライ処理の機能を実装していく予定です。





\##　今後の改善点



* 機能面



1. 通知機能
   これまでのメモアプリでは通知機能があるものが少ないと感じたため通知機能を持たせて買い忘れを防いだり、タスク管理を時間とともに思い出せるようにしたい。
2. リトライ処理
   地下鉄や通信が困難な場合に読み込んだメモが通信環境により読み込まれない事態を防ぎたい

* 履歴のつけ方

　pullやmerge、ブランチの切り替えなどができていないため次の機能の実装はその点にも気を付けて制作する



\##　工夫した点



**ユーザー体験を意識**
スマホでも片手で操作しやすいシンプルなUIを意識
一度リロードしてもログイン状態が保たれるようにして使いやすさを意識
ログインやサインアップも一目でわかりやすいように彩度や色を調整

**Firebase を活用**
Firebase Authentication でメールアドレスによるログイン機能を実装
Firestore でリアルタイムにメモが反映される仕組みを構築
FirestoreのsignInWithEmailAndPasswordを使うことにより既存のアカウントでしかログインできなくなるように実装

**コードの保守性**
機能ごとにコンポーネントを分割し、再利用性を意識
TypeScript を導入して型安全に実装

**拡張性を考慮**
今後「通知機能」や「リトライ処理」を追加しやすいようにデータ構造を設計
追加の機能はGitも意識して実装



\## 更新履歴



\* 2025/9/9: \[README.md を更新]
