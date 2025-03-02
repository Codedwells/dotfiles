# Server Setup

- [] **Setup server time**

```bash
sudo dpkg-reconfigure tzdata
```

- [] Install htop

```bash
apt install htop
```

- [] Install NGINX

```bash
apt install nginx
```

- [] Install nodejs

```jsx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 20
```

- [] Install bun

```jsx
curl -fsSL https://bun.sh/install | bash
```

- [] Install mongodb

```jsx
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt update
sudo apt install -y mongodb-org
```

- [] install pm2

```bash
npm i -g pm2
```

- [] install CertBot

```jsx
sudo apt install certbot python3-certbot-nginx
```

- [] PM2 start on reboot

```bash
pm2 startup
```

- [] Restart system everyday at 3 in the morning

```bash
crontab -e # Run this command

0 3 * * * /sbin/shutdown -r now # Add this line

crontab -l # Verify new line added
```
