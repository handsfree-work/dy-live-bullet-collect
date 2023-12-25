current_pwd=$(pwd)

echo "开始设置git配置"

read -p "请输入username：" username
git config  user.name $username

read -p "请输入email：" email
git config  user.email $email

echo "已设置记住git账号密码"
git config credential.helper "store --file=$current_pwd/.git/credential.store"

echo "git配置完成"
