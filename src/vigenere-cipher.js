class VigenereCipheringMachine {
    constructor( direct = true ) {
        this.direct = direct;
    }
    encrypt( message, key ) {
        let space = 0;
        if ( message === undefined || key === undefined ) {
            throw new Error();
        }
        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let encrypted = message.map((value, index) => {
            if ( value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value) ) {
                space++;
                return value;
            }
            let keyIndex = index < key.length - 1 ? index - space : (index - space) % key.length;
            let encrChar = value.charCodeAt(0) - 65 + key[keyIndex].charCodeAt(0) - 65;
            if ( encrChar > 25 ) encrChar -= 26;
            return String.fromCharCode(encrChar + 65);
            }
        );
        if ( !this.direct ) encrypted.reverse();
        return encrypted.join('');
    }

    decrypt( encryptedMessage, key ) {
        let space = 0;
        if ( encryptedMessage === undefined || key === undefined ) {
            throw new Error();
        }
        let message = encryptedMessage.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let decrypted = message.map((value, index) => {
                if ( value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value) ) {
                    space++;
                    return value;
                }
                let keyIndex = index < key.length-1 ? index-space : ( index- space ) % key.length ;
                let encrChar = ( value.charCodeAt(0) - 65 ) - ( key[keyIndex].charCodeAt(0) - 65 );
                if ( encrChar < 0 ) encrChar += 26;
                return String.fromCharCode( encrChar + 65 );
            }
        );
        if ( !this.direct ) decrypted.reverse();
        return decrypted.join('');
    }

}

module.exports = VigenereCipheringMachine;