"use strict";(self.webpackChunknewapp=self.webpackChunknewapp||[]).push([[34],{1034:(ne,h,s)=>{s.r(h),s.d(h,{HomeModule:()=>te});var d=s(6895),f=s(374),b=s(2761),p=s(8003),a=s(4006),c=s(1206),e=s(4650),_=s(4473),x=s(313),v=s(7579),A=s(8372),k=s(1884),D=s(9300),U=s(4004),m=s(5938),C=s(4826),g=s(4859),u=s(4144);function y(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",21)(2,"div"),e._uU(3," Address: "),e._UZ(4,"input",22),e.qZA(),e.TgZ(5,"div"),e._uU(6," DoorNumber: "),e._UZ(7,"input",23),e.qZA()(),e.BQk()),2&n){const t=i.index;e.xp6(1),e.Q6J("formGroupName",t)}}function O(n,i){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,y,8,1,"ng-container",20),e.qZA()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.convertControl(t.get("addressArray")).controls)}}function N(n,i){if(1&n){const t=e.EpF();e.ynx(0,10),e.TgZ(1,"div",11)(2,"button",12),e.NdJ("click",function(){const l=e.CHM(t).index,oe=e.oxw();return e.KtG(oe.addAdress(l))}),e._uU(3,"Add Address"),e.qZA(),e.TgZ(4,"div",13)(5,"div")(6,"div",14),e._uU(7," Name: "),e._UZ(8,"input",15),e.qZA(),e.TgZ(9,"div",14),e._uU(10," EmailId: "),e._UZ(11,"input",16),e.qZA(),e.TgZ(12,"div",14),e._uU(13," Phone Number "),e._UZ(14,"input",17),e.qZA()(),e.YNc(15,O,2,1,"div",18),e.qZA()(),e.BQk()}if(2&n){const t=i.$implicit,o=i.index,r=e.oxw();e.xp6(1),e.Q6J("formGroupName",o),e.xp6(1),e.Q6J("disabled","VALID"!==t.status),e.xp6(13),e.Q6J("ngIf",r.convertControl(t.get("addressArray"))&&r.convertControl(t.get("addressArray")).value&&r.convertControl(t.get("addressArray")).value.length)}}function P(n,i){if(1&n&&(e.TgZ(0,"div",24)(1,"div",25)(2,"div"),e._UZ(3,"input",26),e.qZA()()()),2&n){const t=i.index;e.xp6(1),e.Q6J("formGroupName",t)}}function I(n,i){if(1&n&&(e.TgZ(0,"div",24)(1,"div",25)(2,"div"),e._UZ(3,"input",26),e.qZA()()()),2&n){const t=i.index;e.xp6(1),e.Q6J("formGroupName",t)}}const Z=function(n){return[n]};let M=(()=>{class n{constructor(t){this.fb=t,this.masterGroup=new a.cw({}),this.first=this.fb.array([]),this.second=this.fb.array([]),this.firstgroup=this.fb.group({data:this.fb.array([])}),this.secodeGroup=this.fb.group({data:this.fb.array([])}),this.listArray=[],this.value={isbn:"123-456-222",author:{lastname:"Doe",firstname:"Jane"},editor:{lastname:"Smith",firstname:"Jane"},title:"The Ultimate Database Study Guide",category:["Non-Fiction","Technology"]},this.todo=["Get to work","Pick up groceries","Go home","Fall asleep"],this.done=["Get up","Brush teeth","Take a shower","Check e-mail","Walk dog"]}ngOnInit(){this.masterGroup=this.fb.group({totalCount:this.fb.control(""),data:this.fb.array([this.addGroup()])}),this.listArray=[0],this.todo.forEach(t=>{this.firstgroup.get("data").push(this.fb.group({value:this.fb.control(t)}))}),this.done.forEach(t=>{this.secodeGroup.get("data").push(this.fb.group({value:this.fb.control(t)}))})}drop(t){t.previousContainer===t.container?(0,c.bA)(t.container.data.controls,t.previousIndex,t.currentIndex):(0,c.EA)(t.previousContainer.data.controls,t.container.data.controls,t.previousIndex,t.currentIndex)}addGroup(){return this.fb.group({name:this.fb.control("",a.kI.required),emailId:this.fb.control("",a.kI.required),phoneNumber:this.fb.control("",a.kI.required)})}addAdress(t){this.masterGroup.get("data").at(t).get("addressArray")?this.masterGroup.get("data").at(t).get("addressArray").push(this.pushAdressintoArray()):this.masterGroup.get("data").at(t).addControl("addressArray",this.fb.array([this.pushAdressintoArray()]))}pushAdressintoArray(){return this.fb.group({addressOne:this.fb.control("",a.kI.required),DoorNumber:this.fb.control("",a.kI.required)})}updateValue(){this.masterGroup.get("data").push(this.addGroup()),this.listArray=[...this.listArray,this.listArray.length]}get arraydata(){return this.masterGroup.get("data")}save(){console.log(this.masterGroup.getRawValue())}convertControl(t){return t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-details-dialog"]],decls:19,vars:14,consts:[[3,"formGroup"],["cdkDropList","",3,"cdkDropListDropped"],["formArrayName","data",4,"ngFor","ngForOf"],[1,"mt-3",3,"click"],[3,"click"],[1,"example-container"],["cdkDropList","",1,"example-list",3,"formGroup","cdkDropListData","cdkDropListConnectedTo","cdkDropListDropped"],["todoList","cdkDropList"],["class","example-box","formArrayName","data","cdkDrag","",4,"ngFor","ngForOf"],["doneList","cdkDropList"],["formArrayName","data"],["cdkDrag","",1,"mt-3","outerLayer",3,"formGroupName"],[3,"disabled","click"],[1,"d-flex","gap-5"],[1,"mt-3"],["matInput","","formControlName","name"],["matInput","","formControlName","emailId"],["matInput","","formControlName","phoneNumber"],["formArrayName","addressArray",4,"ngIf"],["formArrayName","addressArray"],[4,"ngFor","ngForOf"],[1,"mt-3",3,"formGroupName"],["matInput","","formControlName","addressOne"],["matInput","","formControlName","DoorNumber"],["formArrayName","data","cdkDrag","",1,"example-box"],[3,"formGroupName"],["matInput","","formControlName","value"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("cdkDropListDropped",function(l){return o.drop(l)}),e.YNc(2,N,16,3,"ng-container",2),e.qZA(),e.TgZ(3,"div",3),e.NdJ("click",function(){return o.updateValue()}),e._uU(4,"Add"),e.qZA(),e.TgZ(5,"div",4),e.NdJ("click",function(){return o.save()}),e._uU(6,"Save"),e.qZA()(),e.TgZ(7,"div",5)(8,"h2"),e._uU(9,"To do"),e.qZA(),e.TgZ(10,"div",6,7),e.NdJ("cdkDropListDropped",function(l){return o.drop(l)}),e.YNc(12,P,4,1,"div",8),e.qZA()(),e.TgZ(13,"div",5)(14,"h2"),e._uU(15,"Done"),e.qZA(),e.TgZ(16,"div",6,9),e.NdJ("cdkDropListDropped",function(l){return o.drop(l)}),e.YNc(18,I,4,1,"div",8),e.qZA()()),2&t){const r=e.MAs(11),l=e.MAs(17);e.Q6J("formGroup",o.masterGroup),e.xp6(2),e.Q6J("ngForOf",o.convertControl(o.masterGroup.get("data")).controls),e.xp6(8),e.Q6J("formGroup",o.firstgroup)("cdkDropListData",o.convertControl(o.firstgroup.get("data")))("cdkDropListConnectedTo",e.VKq(10,Z,l)),e.xp6(2),e.Q6J("ngForOf",o.convertControl(o.firstgroup.get("data")).controls),e.xp6(4),e.Q6J("formGroup",o.secodeGroup)("cdkDropListData",o.convertControl(o.secodeGroup.get("data")))("cdkDropListConnectedTo",e.VKq(12,Z,r)),e.xp6(2),e.Q6J("ngForOf",o.convertControl(o.secodeGroup.get("data")).controls)}},dependencies:[d.sg,d.O5,a.Fj,a.JJ,a.JL,a.sg,a.u,a.x0,a.CE,c.Wj,c.Zt,u.Nt],styles:[".outerLayer[_ngcontent-%COMP%]{border:1px solid black;height:12em}.example-container[_ngcontent-%COMP%]{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:60px;background:white;border-radius:4px;overflow:hidden;display:block}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]}),n})(),T=(()=>{class n{constructor(t){this.dialog=t,this.selectedCard=new e.vpe}ngOnInit(){}explore(t){this.dialog.open(M,{width:"60%",height:"70vh"})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-destination-card"]],inputs:{data:"data"},outputs:{selectedCard:"selectedCard"},standalone:!0,features:[e.jDz],decls:16,vars:6,consts:[[1,"box","mb-5",3,"formGroup"],[1,"imageContainer"],["width","50","height","200",2,"border-radius","10px","margin-top","15px",3,"src"],[1,"mt-2"],[1,"fs-6"],[1,"fs-5","fw-bold"],[1,"rate-container"],[1,"per-ceontainer","ms-2"],[1,"text-end","explore"],["mat-raised-button","",1,"ExploreNow",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4),e._uU(5),e.qZA(),e.TgZ(6,"div",5),e._uU(7),e.qZA(),e.TgZ(8,"div")(9,"div",6),e._uU(10),e.TgZ(11,"span",7),e._uU(12,"/Pax"),e.qZA()()()()(),e.TgZ(13,"div",8)(14,"button",9),e.NdJ("click",function(){return o.explore()}),e._uU(15,"Explore"),e.qZA()()()),2&t&&(e.Q6J("formGroup",o.data),e.xp6(2),e.Q6J("src",o.data.getRawValue().image,e.LSH),e.xp6(3),e.Oqu(o.data.getRawValue().place_name),e.xp6(2),e.Oqu(o.data.getRawValue().spots),e.xp6(3),e.AsE("$ ",o.data.getRawValue().priceFrom," - $ ",o.data.getRawValue().priceTo,""))},dependencies:[f.m,a.JL,a.sg,g.lW,d.ez],styles:[".box[_ngcontent-%COMP%]{height:20.5em;padding-top:7px;background-color:#fff;border-radius:20px;border:1px solid #e9e9e9;position:relative;margin-top:10px}.imageContainer[_ngcontent-%COMP%]{width:85%;margin:0 auto;margin-top:10px!important}.rate-container[_ngcontent-%COMP%]{color:#ff8200;margin-top:12px;font-size:20px;font-weight:700}.per-ceontainer[_ngcontent-%COMP%]{color:#707070;font-size:12px}.ExploreNow[_ngcontent-%COMP%]{font-size:15px;font-weight:700;border-radius:20px 0;color:#fff;height:40px;width:105px;min-width:none;min-width:50!important;background-color:#1bb782;border:1px solid #e9e9e9;box-shadow:none!important;padding:0}.explore[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}"]}),n})();function q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-destination-card",22),e.NdJ("selectedCard",function(r){e.CHM(t);const l=e.oxw(2);return e.KtG(l.emitedData(r))}),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("data",t)}}function F(n,i){1&n&&(e.ynx(0,20),e.YNc(1,q,2,1,"ng-template",21),e.BQk())}let J=(()=>{class n extends p.p{constructor(t,o,r){super(t),this.inject=t,this.service=o,this.dialog=r,this.subject=new v.x,this.search=this.fb.control(""),this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,margin:20,responsive:{0:{items:2},600:{items:3}},nav:!1}}ngOnInit(){this.destinationData.forEach(t=>{this.ticket.controls.push(this.convertIntoControl(t))}),this.subject.pipe((0,A.b)(500),(0,k.x)(),(0,D.h)(t=>this.search.getRawValue().length>=5),(0,U.U)(t=>3*t)).subscribe(t=>{console.log(this.search.getRawValue()),console.log("res",t)})}convertIntoControl(t){return this.fb.group({place_name:this.fb.control(t.place_name?t.place_name:""),spots:this.fb.control(t.spots?t.spots:""),priceFrom:this.fb.control(t.priceFrom?t.priceFrom:""),priceTo:this.fb.control(t.priceTo?t.priceTo:""),image:this.fb.control(t.image?t.image:""),numberOfItem:this.fb.control(t.numberOfItem?t.numberOfItem:""),taxPerCount:this.fb.control(t.taxPerCount?t.taxPerCount:"")})}get ticket(){return this.service.ticketBookingDetails.get("placeticketdetail")}change(t){console.log(t)}emitedData(t){console.log("Selected value = ",t)}ngOnDestroy(){this.subject.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.zs3),e.Y36(_.v),e.Y36(m.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-ticket-card"]],features:[e.qOj],decls:30,vars:3,consts:[[1,"mt-3","mb-4"],[1,"locoimage"],["src","assets/Images/Place Image/kindpng_2760684.png",2,"height","42px","width","30px"],["matInput","","placeholder","\uf002 Explore World",1,"inputField","ms-4",3,"formControl","keyup","ngModelChange"],[1,"firstlayer"],[1,"card"],["src","assets/Images/Place Image/shlomo-shalev-GoPYSBvZ-QQ-unsplash.jpg",2,"height","22em","width","100%","border-radius","15px 15px 0 0"],[1,"d-flex","align-items-center","details","justify-content-between","mt-2"],[1,"fs-2","fw-bold"],[1,"rate-container"],[1,"per-ceontainer"],[1,"mt-2"],["mat-raised-button","",1,"BookingNow"],[1,"d-flex","justify-content-between","mt-5","align-items-center"],[1,"fs-3","fw-bold"],[1,"fs-5"],["mat-raised-button","",1,"ExploreNow"],[1,"mt-4"],[3,"options"],["class","mt-3",4,"ngFor","ngForOf"],[1,"mt-3"],["carouselSlide",""],[3,"data","selectedCard"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"input",3),e.NdJ("keyup",function(l){return o.change(l)})("ngModelChange",function(l){return o.subject.next(l)}),e.qZA()()(),e.TgZ(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.TgZ(7,"div",7)(8,"div")(9,"div",8),e._uU(10,"Madeira, Portugal Island"),e.qZA(),e.TgZ(11,"div",9),e._uU(12,"$ 3,500 "),e.TgZ(13,"span",10),e._uU(14,"/Pax"),e.qZA()()(),e.TgZ(15,"div",11)(16,"button",12),e._uU(17,"Book Now"),e.qZA()()()(),e.TgZ(18,"div",13)(19,"div")(20,"div",14),e._uU(21,"Best Destination"),e.qZA(),e.TgZ(22,"div",15),e._uU(23,"100 Destination"),e.qZA()(),e.TgZ(24,"div")(25,"button",16),e._uU(26,"Explore More"),e.qZA()()(),e.TgZ(27,"div",17)(28,"owl-carousel-o",18),e.YNc(29,F,2,0,"ng-container",19),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("formControl",o.search),e.xp6(25),e.Q6J("options",o.customOptions),e.xp6(1),e.Q6J("ngForOf",o.ticket.controls))},dependencies:[d.sg,a.Fj,a.JJ,a.oH,C.Fy,C.Mp,g.lW,u.Nt,T],styles:['@import"//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";.rate-container[_ngcontent-%COMP%]{color:#ff8200;font-size:28px;font-weight:700}.inputField[_ngcontent-%COMP%]::-webkit-input-placeholder{font-family:FontAwesome;font-weight:400;overflow:visible;vertical-align:top;display:inline-block!important;font-size:20px;color:#dcddde}.per-ceontainer[_ngcontent-%COMP%]{color:#707070;font-size:12px}.details[_ngcontent-%COMP%]{width:90%;margin:0 auto}.firstlayer[_ngcontent-%COMP%]{width:93%;margin:0 auto}.card[_ngcontent-%COMP%]{width:90%;border:1px solid #e9e9e9;border-radius:15px;height:30em;margin:0 auto}.BookingNow[_ngcontent-%COMP%]{font-size:17px;font-weight:700;border-radius:30px;color:#fff;height:45px;background-color:#1bb782;box-shadow:none!important}.inputField[_ngcontent-%COMP%]{width:23em;height:55px;border-radius:25px;outline:none;border:2px solid #FF8200;padding-left:20px}.locoimage[_ngcontent-%COMP%]{margin-left:7em;display:flex;align-items:center}.ExploreNow[_ngcontent-%COMP%]{font-size:17px;font-weight:700;border-radius:30px;color:#ff8200;height:45px;background-color:#fff;border:1px solid #e9e9e9;box-shadow:none!important}.wholeContainer[_ngcontent-%COMP%]{background-color:#1bb782}'],changeDetection:0}),n})(),G=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-package-card"]],decls:17,vars:0,consts:[[1,"outerBox","mb-3"],[1,"text-end"],["mat-raised-button","",1,"ExploreNow"],[1,"firstLayer"],[1,"d-flex","gap-5"],["src","assets/Images/Place Image/shan-elahi-DDiLYt_F88w-unsplash.jpg",1,"image",2,"width","11em","height","7em"],[1,"mt-2"],[1,"fs-6"],[1,"fs-5","fw-bold"],[1,"rate-container"],[1,"per-ceontainer","ms-2"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e._uU(3,"Explore"),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4),e._UZ(6,"img",5),e.TgZ(7,"div",6)(8,"div",7),e._uU(9,"120 Tourist Spots"),e.qZA(),e.TgZ(10,"div",8),e._uU(11,"Labuna Bajo"),e.qZA(),e.TgZ(12,"div")(13,"div",9),e._uU(14,"$ 200 - $ 2,500"),e.TgZ(15,"span",10),e._uU(16,"/Pax"),e.qZA()()()()()()())},dependencies:[g.lW],styles:[".outerBox[_ngcontent-%COMP%]{height:10.5em;background-color:#fff;border-radius:10px;border:1px solid #e9e9e9}.firstLayer[_ngcontent-%COMP%]{width:91%;margin:0 auto;margin-top:-15px!important}.image[_ngcontent-%COMP%]{border-radius:10px}.ExploreNow[_ngcontent-%COMP%]{font-size:15px;font-weight:700;border-radius:0 10px;color:#fff;height:38px;width:100px;min-width:none;min-width:50!important;background-color:#1bb782;border:1px solid #e9e9e9;box-shadow:none!important;padding:0}.rate-container[_ngcontent-%COMP%]{color:#ff8200;margin-top:12px;font-size:20px;font-weight:700}.per-ceontainer[_ngcontent-%COMP%]{color:#707070;font-size:12px}"]}),n})();var j=s(1135);let L=(()=>{class n extends p.p{constructor(t,o){super(t),this.inject=t,this.db=o,this.userDetails=this.fb.group({name:this.fb.control(""),userMailId:this.fb.control(""),userPhoneNumber:this.fb.control(""),userAddress:this.fb.control(""),numberOfPeopleCome:this.fb.control(""),age:this.fb.control("")})}ngOnInit(){this.userDetails.get("numberOfPeopleCome").valueChanges.subscribe(t=>{})}get othersDetail(){return this.userDetails.get("othersDetail")}convertintoControl(t){return t}updateValue(){let t=this.fb.group({userName:this.fb.control(""),userMailId:this.fb.control(""),userPhoneNumber:this.fb.control(""),userAddress:this.fb.control("")});this.userDetails.get("othersDetail").push(t)}add(){this.getObjectStore();let t=this.objectStore.add(this.userDetails.getRawValue());t.onerror=o=>{console.log(o)},t.onsuccess=o=>{console.log(o)}}edit(){this.getObjectStore();let t={id:2,...this.userDetails.getRawValue()},o=this.objectStore.put(t);o.onerror=r=>{console.log("onerror",r)},o.onsuccess=r=>{console.log(r)}}getDetail(){this.getObjectStore();let t=this.objectStore.getAll();t.onerror=o=>{},t.onsuccess=o=>{console.log(o.target.result)}}deletee(){this.getObjectStore();let t=this.objectStore.delete(2);t.onerror=o=>{},t.onsuccess=o=>{console.log(o.target.result)}}searchThroughIndex(){this.getObjectStore();let t=this.objectStore.index("age").openCursor("25");t.onerror=o=>{console.log(o)},t.onsuccess=o=>{console.log("searchThroughIndex",o.target.result.value)}}searchThroughrange(){this.getObjectStore(),IDBKeyRange.only(["2222","8"]);let o=this.objectStore.index("range").openCursor(["2222","8"]);o.onerror=r=>{console.log(r)},o.onsuccess=r=>{console.log("searchThroughIndex",r.target.result.value)}}getObjectStore(){this.transaction=this.db.dataBase.transaction(["list"],"readwrite"),this.objectStore=this.transaction.objectStore("list")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.zs3),e.Y36(x.V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-addusers-detail"]],features:[e.qOj],decls:37,vars:1,consts:[[3,"formGroup"],["matInput","","formControlName","name"],["matInput","","formControlName","userMailId"],["matInput","","formControlName","userPhoneNumber"],["matInput","","formControlName","userAddress"],["matInput","","formControlName","age"],["matInput","","formControlName","numberOfPeopleCome"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._uU(2," Name: "),e.qZA(),e.TgZ(3,"div"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"div"),e._uU(6," EmailId: "),e.qZA(),e.TgZ(7,"div"),e._UZ(8,"input",2),e.qZA(),e.TgZ(9,"div"),e._uU(10," Phone Number "),e.qZA(),e.TgZ(11,"div"),e._UZ(12,"input",3),e.qZA(),e.TgZ(13,"div"),e._uU(14," Address 1 "),e.qZA(),e.TgZ(15,"div"),e._UZ(16,"input",4),e.qZA(),e.TgZ(17,"div"),e._uU(18," Age "),e.qZA(),e.TgZ(19,"div"),e._UZ(20,"input",5),e.qZA(),e.TgZ(21,"div"),e._uU(22," Enter Number of People Come with you "),e.qZA(),e.TgZ(23,"div"),e._UZ(24,"input",6),e.qZA(),e.TgZ(25,"div",7),e.NdJ("click",function(){return o.add()}),e._uU(26," add "),e.qZA(),e.TgZ(27,"div",7),e.NdJ("click",function(){return o.edit()}),e._uU(28," edit "),e.qZA(),e.TgZ(29,"div",7),e.NdJ("click",function(){return o.getDetail()}),e._uU(30," getDetail "),e.qZA(),e.TgZ(31,"div",7),e.NdJ("click",function(){return o.deletee()}),e._uU(32," delete "),e.qZA(),e.TgZ(33,"div",7),e.NdJ("click",function(){return o.searchThroughIndex()}),e._uU(34," searchThroughIndex "),e.qZA(),e.TgZ(35,"div",7),e.NdJ("click",function(){return o.searchThroughIndex()}),e._uU(36," searchThroughrange "),e.qZA()()),2&t&&e.Q6J("formGroup",o.userDetails)},dependencies:[a.Fj,a.JJ,a.JL,a.sg,a.u,u.Nt]}),n})();var E=s(3238),S=s(9602),z=s(7392),w=s(9549),Q=s(4385);const H=["registor"],R=["login"];function V(n,i){if(1&n&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.value," ")}}function B(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"div",23),e._uU(2," Registor Form: "),e.qZA(),e.TgZ(3,"div")(4,"mat-form-field",24)(5,"mat-label"),e._uU(6,"First name"),e.qZA(),e._UZ(7,"input",25),e.qZA()(),e.TgZ(8,"div")(9,"mat-form-field",24)(10,"mat-label"),e._uU(11,"Last Name"),e.qZA(),e._UZ(12,"input",26),e.qZA()(),e.TgZ(13,"div")(14,"mat-form-field",24)(15,"mat-label"),e._uU(16,"Email"),e.qZA(),e._UZ(17,"input",27),e.qZA()(),e.TgZ(18,"div")(19,"mat-form-field",24)(20,"mat-label"),e._uU(21,"PassWord"),e.qZA(),e._UZ(22,"input",28),e.qZA()(),e.TgZ(23,"div")(24,"button",29),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.registorApiCall())}),e._uU(25,"login"),e.qZA()()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.registorUser)}}function Y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"div",23),e._uU(2," Registor: "),e.qZA(),e.TgZ(3,"div")(4,"mat-form-field",24)(5,"mat-label"),e._uU(6,"Name"),e.qZA(),e._UZ(7,"input",30),e.qZA()(),e.TgZ(8,"div")(9,"mat-form-field",24)(10,"mat-label"),e._uU(11,"email"),e.qZA(),e._UZ(12,"input",31),e.qZA()(),e.TgZ(13,"div")(14,"mat-form-field",24)(15,"mat-label"),e._uU(16,"password"),e.qZA(),e._UZ(17,"input",32),e.qZA()(),e.TgZ(18,"div")(19,"button",29),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.Registor())}),e._uU(20,"Registor"),e.qZA()()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.crud)}}let W=(()=>{class n extends p.p{constructor(t,o){super(o),this.dialog=t,this.inject=o,this.subject=new v.x,this.data=new j.X({value:""}),this.package=[{value:"Family"},{value:"College"},{value:"Honymoon"},{value:"Kids"}],this.selected="",this.loginDetail=this.fb.group({email:this.fb.control(""),password:this.fb.control("")}),this.registorUser=this.fb.group({first_name:this.fb.control(""),last_name:this.fb.control(""),email:this.fb.control(""),password:this.fb.control("")}),this.crud=this.fb.group({full_name:this.fb.control(""),email:this.fb.control(""),password:this.fb.control("")})}ngOnInit(){}openDialog(){localStorage.getItem("userIf")?this.dialog.open(this.registor,{width:"30%"}):this.dialog.open(this.login)}loginApiCall(){let t={email:this.loginDetail.getRawValue().email,password:this.loginDetail.getRawValue().password};this.apiservice.post("login",t).subscribe(r=>{})}registorApiCall(){this.registorUser.getRawValue(),this.registorUser.getRawValue(),this.registorUser.getRawValue(),this.registorUser.getRawValue()}Registor(){console.log("here"),this.apiservice.get("supplier/pdf").subscribe(r=>{console.log(r)})}addUser(){this.dialog.open(L)}get(){this.apiservice.get("/").subscribe(o=>{console.log(o)})}put(){let o={...this.crud.getRawValue()};this.apiservice.put("/63aac4b1f696f7b496514d61",o).subscribe(r=>{console.log(r)})}post(){let t={...this.crud.getRawValue()};this.apiservice.post("/",t).subscribe(r=>{console.log(r)})}deletee(){this.apiservice.delete("/63aa93a3e3557e92d89b0bfd").subscribe(o=>{console.log(o)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.uw),e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-header"]],viewQuery:function(t,o){if(1&t&&(e.Gf(H,5),e.Gf(R,5)),2&t){let r;e.iGM(r=e.CRH())&&(o.registor=r.first),e.iGM(r=e.CRH())&&(o.login=r.first)}},features:[e.qOj],decls:44,vars:2,consts:[[1,"mt-2","d-flex","justify-content-between","box"],[1,"d-flex"],["src","../../../assets/Images/User Icons/pngwing.com (1).png",2,"width","60px",3,"dblclick"],[1,"ms-4"],[1,"fs-4","fw-bold"],[1,"fs-6"],[1,"imageContainer"],["mat-raised-button","",1,"ExploreNow",3,"click"],[1,"demo-inline-calendar-card","text-end"],[3,"selected","selectedChange"],[1,"mt-4","mb-2"],[1,"mt-2"],["matInput","",1,"inputField"],[1,"mb-2"],[1,"packageSelect"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-5"],[1,"fs-3","fw-bold"],[1,"fs-5"],["registor",""],["login",""],[3,"value"],[3,"formGroup"],[1,"fs-4","fw-bold","mb-3"],[1,"example-full-width"],["matInput","","placeholder","First name","formControlName","first_name"],["matInput","","placeholder","Last name","formControlName","last_name"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","PassWord","formControlName","password"],["mat-raised-button","",1,"BookingNow",3,"click"],["matInput","","placeholder","Email","formControlName","full_name"],["matInput","","placeholder","PassWord","formControlName","email"],["matInput","","placeholder","Email","formControlName","password"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"img",2),e.NdJ("dblclick",function(){return o.addUser()}),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4),e._uU(6," User "),e.qZA(),e.TgZ(7,"div",5),e._uU(8," Die with dreams not memories. "),e.qZA()()(),e.TgZ(9,"div",6)(10,"button",7),e.NdJ("click",function(){return o.openDialog()}),e.TgZ(11,"mat-icon"),e._uU(12,"more_vert"),e.qZA()()()(),e.TgZ(13,"div",1)(14,"div",8)(15,"mat-calendar",9),e.NdJ("selectedChange",function(l){return o.selected=l}),e.qZA()(),e.TgZ(16,"div")(17,"div",10)(18,"div"),e._uU(19," Age: "),e.qZA(),e.TgZ(20,"div",11),e._UZ(21,"input",12),e.qZA()(),e.TgZ(22,"div",13)(23,"div"),e._uU(24," Number of Person: "),e.qZA(),e.TgZ(25,"div",11),e._UZ(26,"input",12),e.qZA()(),e.TgZ(27,"div",13)(28,"div"),e._uU(29," Package: "),e.qZA(),e.TgZ(30,"div",11)(31,"mat-select",14),e.YNc(32,V,2,2,"mat-option",15),e.qZA()()(),e.TgZ(33,"div"),e._uU(34," Package Range: "),e.qZA()()(),e.TgZ(35,"div",16)(36,"div",17),e._uU(37,"Madeira Travel Schedule"),e.qZA(),e.TgZ(38,"div",18),e._uU(39,"12 Destination"),e.qZA()(),e.YNc(40,B,26,1,"ng-template",null,19,e.W1O),e.YNc(42,Y,21,1,"ng-template",null,20,e.W1O)),2&t&&(e.xp6(15),e.Q6J("selected",o.selected),e.xp6(17),e.Q6J("ngForOf",o.package))},dependencies:[d.sg,a.Fj,a.JJ,a.JL,a.sg,a.u,E.ey,g.lW,S._H,z.Hw,w.KE,w.hX,u.Nt,Q.gD],styles:[".box[_ngcontent-%COMP%]{width:90%;margin:0 auto;margin-top:20px!important}.moreicon[_ngcontent-%COMP%]{margin-top:17px;margin-left:16px}.ExploreNow[_ngcontent-%COMP%]{font-size:17px;font-weight:700;border-radius:44px;color:#fff;height:60px;width:60px;min-width:none;min-width:50!important;background-color:#1bb782;border:1px solid #e9e9e9;box-shadow:none!important;padding:0}.calender[_ngcontent-%COMP%]{height:10em;width:100%}.demo-inline-calendar-card[_ngcontent-%COMP%]{width:330px}.BookingNow[_ngcontent-%COMP%]{font-size:13px;font-weight:700;border-radius:8px;color:#fff;padding:0;height:34px;width:84px;background-color:#1bb782;box-shadow:none!important}  .mat-calendar-body-selected{background-color:#1bb782}@media (hover: hover){  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#fff}}.inputField[_ngcontent-%COMP%]{width:17em;height:38px;outline:none;border:1px solid #FF8200;background-color:transparent;padding-left:10px}.packageSelect[_ngcontent-%COMP%]{border:1px solid #FF8200!important;width:17em;height:38px}.packageSelect[_ngcontent-%COMP%]     .mat-select-value{margin-top:18px;margin-left:10px}.packageSelect[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{margin-top:18px}.boxContainer[_ngcontent-%COMP%]{border:1px solid green;border-radius:10px;background-color:#fff;padding:0 10px}"]}),n})();function $(n,i){1&n&&(e.ynx(0),e._UZ(1,"app-package-card",17),e.BQk())}const X=[{path:"initialPage",component:(()=>{class n extends p.p{constructor(t,o,r){super(t),this.inject=t,this.service=o,this.db=r,this.ticket=new a.cw({}),this.firstgroup=this.fb.group({data:this.fb.array([])}),this.secodeGroup=this.fb.group({data:this.fb.array([])}),this.arrayOfValue=["ajay","sankar","Angular","Developer"],this.todo=["Get to work","Pick up groceries","Go home","Fall asleep"],this.done=["Get up","Brush teeth","Take a shower","Check e-mail","Walk dog"],this.profile=!1}ngOnInit(){this.todo.forEach(t=>{this.firstgroup.get("data").push(this.fb.group({value:this.fb.control(t)}))}),this.done.forEach(t=>{this.secodeGroup.get("data").push(this.fb.group({value:this.fb.control(t)}))}),this.db.openIndexDb(1)}over(){this.profile=!0}executedFunction(){this.startTime=new Date;for(let t=0;t<1e9;t++);this.endTime=new Date,this.uiBlockedFor=this.endTime.valueOf()-this.startTime.valueOf()}openSnackBar(){this.snackbar.openSnackbar("happy","","Error"),console.log("here"),this.apiservice.get("user").subscribe(o=>{console.log(o)})}convertControl(t){return t}out(){this.profile=!1,console.log(2)}render(){return console.log("render"),!0}drop(t){console.log(t),console.log(t),t.previousContainer===t.container?(0,c.bA)(t.container.data.controls,t.previousIndex,t.currentIndex):(0,c.EA)(t.previousContainer.data.controls,t.container.data.controls,t.previousIndex,t.currentIndex)}question1(){Number(this.value1)===Number(this.value2)?console.log("Values are equal"):Number(this.value1)>Number(this.value1)?console.log(`${this.value1} is greater than ${this.value2}`):console.log(`${this.value2} is greater than ${this.value1}`)}question2(){let o,t=Number(this.value1)*Number(this.value2);console.log(t),o=1===Math.sign(t)||0===Math.sign(t)?"+":"-",window.alert(`The sign of the output is ${o}`)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.zs3),e.Y36(_.v),e.Y36(x.V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-initial-page"]],features:[e.qOj],decls:27,vars:2,consts:[[1,"box"],[1,"secondLayer"],[1,"row","h-100","mx-0"],[1,"col-1","firstColumn","px-0"],[1,"d-flex","gap-5","flex-column","mt-5"],[1,"d-flex","justify-content-center"],["src","../../../assets/Images/User Icons/avengers-png-logo-4975.png",1,"text-center",2,"width","53px","height","53px"],[1,"border","text-center"],["src","../../assets/Images/User Icons/pngwing.com (1).png",2,"width","50px","height","50px"],["src","../../assets/Images/User Icons/ticket.png",2,"width","50px","height","50px"],["src","../../assets/Images/User Icons/wallet-filled-money-tool.png",2,"width","50px","height","50px"],["src","../../assets/Images/User Icons/bookmark.png",2,"width","50px","height","50px"],["src","../../assets/Images/User Icons/rating.png",2,"width","50px","height","50px"],[1,"col-7","wholeContainer","px-0"],[1,"col-4","wholeContainerheader"],["cdkDropList","",1,"mt-3",3,"cdkDropListDropped"],[4,"ngFor","ngForOf"],["cdkDrag",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5),e.TgZ(6,"div",5),e._UZ(7,"img",6),e.qZA(),e._UZ(8,"div",7),e.TgZ(9,"div",5),e._UZ(10,"img",8),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"img",9),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"img",10),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"img",11),e.qZA(),e.TgZ(17,"div",5),e._UZ(18,"img",12),e.qZA()()(),e.TgZ(19,"div",13)(20,"app-ticket-card")(21,"p"),e._uU(22,"Is content projection cool?"),e.qZA()()(),e.TgZ(23,"div",14),e._UZ(24,"app-user-header"),e.TgZ(25,"div",15),e.NdJ("cdkDropListDropped",function(l){return o.drop(l)}),e.YNc(26,$,2,0,"ng-container",16),e.qZA()()()()()),2&t&&(e.xp6(5),e.hij(" ",o.render()," "),e.xp6(21),e.Q6J("ngForOf",o.arrayOfValue))},dependencies:[d.sg,c.Wj,c.Zt,J,G,W],styles:[".location[_ngcontent-%COMP%]{height:50px!important;width:50px!important;font-size:50px!important}.box[_ngcontent-%COMP%]{height:60.5em;background-color:#c8eade;display:flex;background:linear-gradient(70deg,#ff6464 40%,#5ac8fa 40%)}.secondLayer[_ngcontent-%COMP%]{width:100%;background-color:#fff}.border[_ngcontent-%COMP%]{width:60%;border-bottom:1px solid #ECF0F2;margin:0 auto}.firstColumn[_ngcontent-%COMP%]{background-color:#fff;border-right:1px solid #ECF0F2}.wholeContainer[_ngcontent-%COMP%]{background:linear-gradient(180deg,white,white,#f2f2f2)}.wholeContainerheader[_ngcontent-%COMP%]{background:linear-gradient(180deg,#EDFAF6,#EDFAF6,#EDFAF6)}.example-card[_ngcontent-%COMP%]{border:5;position:absolute;width:41%;height:25em;top:25%;left:31%;margin:0 auto}.outerlayer[_ngcontent-%COMP%]{height:60em;position:relative}.example-container[_ngcontent-%COMP%]{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list[_ngcontent-%COMP%]{min-height:38em;background:gray;border-radius:4px;overflow:hidden;display:block}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.outerBox[_ngcontent-%COMP%]{width:25em;height:25em;border:1px solid black;position:relative}.innerBox[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%;border:1px solid red;position:absolute;bottom:0}"]}),n})()}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[b.Bz.forChild(X),b.Bz]}),n})(),ee=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sa"]],standalone:!0,features:[e.jDz],decls:2,vars:0,template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"sa works!"),e.qZA())},dependencies:[d.ez]}),n})(),te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,K,f.m,T,ee]}),n})()}}]);