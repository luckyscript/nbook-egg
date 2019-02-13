* 基于eggjs的个人博客
* 前端展示部分采用ejs，后台管理系统采用react+antd(https://github.com/luckyscript/nbook-admin)
* 数据存储采用mysql + redis
* 部署考虑使用nginx + docker

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```
#### nginx config

nginx.conf
```
location ~ /admin/ {                                                                              
 root  /Users/lukai/MySpace/nbook-admin;
 index index.html;
 include /Users/lukai/Myspace/nbook-admin/admin/.htaccess;
}
```

.htaccess
```
if (!-e $request_filename){
  rewrite ^/(.*)$ /webroot/index.php?_ca_=$1 last;
}
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
