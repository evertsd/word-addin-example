### Testing with Docker
```
# build image
docker build -t word/demo .
docker run -it --rm -p 8443:8443 -v `pwd`:/opt/irregardless-word --name word-demo word/demo /bin/bash

# package new changes
gulp package

# serve static assets
gulp serve-static
```

### Debugging
- Go to Word online and open a document
- Click "Office Add-ins"
- In upper-right of modal, click "Manage my add-ins > Upload my add-in"
- Ensure the Manifest you upload has the source location pointing to https://0.0.0.0:8443/App/Home/Home.html
- When making changes, run:
```
gulp package
gulp serve-static
# re-upload manifest (I believe this is necessary)
```
