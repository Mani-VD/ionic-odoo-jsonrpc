# ionic-odoo-jsonrpc
Ionic app's angular module for working with odoo ERP.<br/>
Dependencies:ionic-native-HTTP module.<br/>
Download odoo_ionic_jsonrpc folder to your project's src folder. Import it as  npm module and use its features.<br/>
Add it to app.module.ts.<br/><br/>
import { OdooRPCService } from '../manikandan_odoo_ionic_jsonrpc';<br/>
...<br/>
constructor(private odoo:OdooRPCService){}<br/><br/>

commonly used methods<br/>
login(db,username,password) <br/>
searchRead(model_name,domain,fields,limit,offset,context)<br/>
call(model_name,method_name,args,kw_args)<br/>




