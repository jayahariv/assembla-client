class AssStoreInstance {
  users: Map;

  getUsers() {
    return this.users;
  }
}

const AssStore = (function () {
    var instance;

    function createInstance() {
        var object = new AssStoreInstance();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = AssStore;
