# Nbook

* 前端展示部分采用ejs
* 后台管理系统采用react+antd (https://github.com/luckyscript/nbook-admin)
* 数据存储采用mysql + redis
* 部署使用nginx + docker

## TODO-FE
- [x] aside content
- [ ] db migrant

## TODO-BE
- [ ] API controllers
- [ ] write test code
- [ ] sequlieze因为目前是typescript，一些api不支持导致了controller或者service里面的多余代码

### Development

```bash
$ docker-compose -f docker-compose.dev.yml up
$ npm i 
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ docker-compose up
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
  rewrite ^/(.*)$ /webroot/index.html?_ca_=$1 last;
}
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
