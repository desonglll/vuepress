
cd ./docs/.vuepress
cp -r dist ../../vuepress
cd ../..

#!/bin/bash
TODAY=$(date +%Y%m%d)
#TODAY=20180806
TODAY_NAME=$(date +%m%d)
#TODAY_NAME=0806
HOST=1.15.176.62
PORT=22
USER=root
PASSWD=Lindesong7758?
sftp -oBatchMode=no -oport=22 $USER@$HOST << !
cd website
rm *
put -r vuepress
!

# cd /Users/mikeshinoda/Desktop/vuepress-starter
rm -rf vuepress
