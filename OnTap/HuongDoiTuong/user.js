class User{
    #storageKey = 'users';

    constructor(){
        this.users = localStorage.getItem(this.#storageKey) ? JSON.parse(localStorage.getItem(this.#storageKey)) : [];
    }

    all(){
        return this.users;
    }

    save() {
        localStorage.setItem(this.#storageKey, JSON.stringify(this.users));
    }

    add(user){
        this.users.push(user);
        this.save();
    }

    update(id,user){
        this.users[id] = user; 
        this.save();
    }

    findById(id){
        if(this.users.length === 0){
            return;
        }
        return this.users[id];
    }

    delete(id){
        this.users.splice(id,1);
        this.save();
    }
}