# build static website files.
cd ./docs/.vuepress
rm -rf dist
cd ../..
npm run docs:build
echo "Build finished."
