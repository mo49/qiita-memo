
```
ssh-keygen -t rsa
```

> 参考
[Macで秘密鍵と公開鍵を作成する (ssh-keygenの使い方)](https://www.task-notes.com/entry/20150208/1423325535)


```bash:~/.ssh/config
Host GitHub
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa
    UseKeychain yes
    AddKeysToAgent yes
```

```bash
ssh -T github
Enter passphrase for key '/Users/{ユーザー名}/.ssh/id_rsa':
Hi {アカウント名}! You've successfully authenticated, but GitHub does not provide shell access.
```

https://qiita.com/y-honda-qiita/items/b5e5923b2f658f09e0a6