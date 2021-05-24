# angular7-odoorpc
OdooRPC for angular 7


## Installation

`npm install --save angular7-odoo-jsonrpc`

## Functions list

- `login(db, user, pass)`
- `logout(force)`
- `getDbList() // doesn't work with odoo >= 9.0`
- `searchRead(model, domain, fields)`
- `call(model, method, args, kwargs)`


## How to use

Import `OdooRPCService` into component

```typescript
import { Component } from '@angular/core';
import { OdooRPCService } from 'angular7-odoo-jsonrpc';
```

Add provider in app component

```typescript
@Component({
    ...
    providers: [OdooRPCService]
})
```

Initialize configuration in `constructor` of component

```typescript

export class OdooClientExampleComponent {

    constructor(odooRPC: OdooRPCService){
        this.odooRPC.init({
            odoo_server: "https://odoo-server-example",
            http_auth: "username:password" // optional
        });
        this.odooRPC.login('db_example', 'username', 'password').then(res => {
            console.log('login success');
        }).catch( err => {
            console.error('login failed', err);
        })
    }

    ...

}

```
