const dotProp = require('dot-prop');
const pkgUp = require('pkg-up');
const path = require('path');
const fs = require('fs');
const { homedir, platform } = require('os');

const packageName = require(pkgUp.sync()).name;

class HomeConf {
  _getHomeConfPath() {
    return path.join(
      homedir(),
      platform() == 'win32' ? `${packageName}.json` : `.${packageName}.json`
    );
  }

  _loadFile(filePath) {
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
      if (error.code === 'ENOENT') {
        return null;
      }

      throw error;
    }
  }

  _load() {
    return this._loadFile(this.path);
  }

  _save() {
    fs.writeFileSync(this.path, JSON.stringify(this.config, null, 2), 'utf8');
  }

  get(propPath) {
    return dotProp.get(this.config, propPath);
  }

  set(propPath, value) {
    dotProp.set(this.config, propPath, value);
    this._save();
  }

  constructor(defaultFileOrObject = {}) {
    this.config = {};
    this.path = this._getHomeConfPath();
    this.defaultValue =
      typeof defaultFileOrObject == 'string'
        ? this._loadFile(defaultFileOrObject)
        : defaultFileOrObject;

    this.config = this._load();

    if (!this.config) {
      this.config = this.defaultValue;
      this._save(this.path);
    }
  }
}

module.exports = HomeConf;
