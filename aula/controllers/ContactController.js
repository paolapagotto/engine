const fs = require('fs');
const path = require('path');

const { cards } = require("../data/cards")
const { contacts } = require("../data/contacts")


module.exports = {
    list(req, res, next) {
        res.render('contacts', { contacts });
    },

    create(req, res, next) {
        let id = contacts.length + 1
        let contact = { id, ...req.body }
        contacts.push(contact);

        console.log(contacts);
        let contactsJson = JSON.stringify(contacts);
        let filePath = path.join("data", "contacts.js");
        console.log(contactsJson);
        console.log(filePath);

        fs.writeFileSync(filePath, 'module.exports = ` ');
        fs.appendFileSync(filePath, contactsJson);
        fs.appendFileSync(filePath, ' `');


        res.render('index', { cards, added: true });
    },

    edit(req, res, next) {
        let id = req.params.id;
        let contact = contacts.find(contact => id == contact.id);

        res.render('edit-contact', { contact });
    },

    update(req, res, next) {
        let id = req.params.id;
        let { nome, email, mensagem } = req.body;
        let contact = contacts.find(contact => contact.id == id);

        contact.name = nome
        contact.email = email
        contact.message = mensagem

        res.render('edit-contact', { contact, updated: true })
    },

    delete(req, res, next) {
        let id = req.params.id;
        contacts.splice(id - 1, 1);

        res.render('contacts', { contacts, deleted: true });
    },
}
