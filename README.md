# ReactNativeTemplate
A template for React-Native. It uses Typescript and Redux.

Troubleshooting in RN version 64

Make sure none of the parent folders containing the project has spaces in them.

- [ ] Pod UDID duplicates:
require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'
install! 'cocoapods',
         :deterministic_uuids => false

- [ ] Delete yarn.lock / packagejson.lock
- [ ] Delete node_modules
- [ ] Delete Pods folder
- [ ] Delete pods.lock

—————————————————
Other steps

Making sure only one node exists

- [ ] Remove node using brew uninstall and force uninstalls
- [ ] Check if node still exists
- [ ] Search for how to remove node completely, also remove from bash file the lines below for NVM
    - [ ] export NVM_DIR="$HOME/.nvm"
    - [ ] [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    - [ ] [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

- [ ] Node -v should not return a value
- [ ] Once node is completely removed, also make sure to remove yarn
- [ ] Then install nvm and use nvm to install node
- [ ] Install nvm using nvm
- [ ] Install yarn using npm

Folder Structure

- [ ] src
    - [ ] screens
        - [ ] screenName
            - index.js
            - style.js