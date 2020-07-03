// import { ComponentPortal, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class PortalService {

//   createCDKPortal(data, windowInstance) {
//     if (windowInstance) {
//       // create a PortalHost with the body of the new window document
//       const host = new DomPortalOutlet(windowInstance.document.body, this.componentFactoryResolver, this.applicationRef, this.injector);
//       // Copy styles from parent window
//       document.querySelectorAll('style').forEach(htmlElement => {
//         windowInstance.document.head.appendChild(htmlElement.cloneNode(true));
//       });
//       this.styleSheetElement = this.getStyleSheetElement();

//       windowInstance.document.head.appendChild(this.styleSheetElement);

//       this.styleSheetElement.onload = () => {
//         // Clear popout modal content
//         windowInstance.document.body.innerText = '';

//         // Create an injector with modal data
//         const injector = this.createInjector(data);
//         this.setPopoutData(data.modalName, data);

//         // Attach the portal
//         let componentInstance;
//         if (data.modalName === PopoutModalName.creditPolicy) {
//           windowInstance.document.title = `${data.applicationId} - CP Limits`;
//           componentInstance = this.attachCreditPolicyContainer(host, injector);
//         }
//         if (data.modalName === PopoutModalName.creditReport) {
//           windowInstance.document.title = `${data.applicationId} - Credit Report`;
//           componentInstance = this.attachCreditReportContainer(host, injector);
//         }
//         POPOUT_MODALS[data.modalName] = { windowInstance, host, componentInstance };
//       };

//       // Popout window page scroll listener
//       if (data.modalName === PopoutModalName.creditReport) {
//         windowInstance.onscroll = () => {
//           const sticky = windowInstance.document.getElementById('creditReportTabs').offsetTop + 104;
//           if (windowInstance.pageYOffset > sticky) {
//             windowInstance.document.getElementById('creditReportTabs').classList.add('sticky');
//           } else {
//             windowInstance.document.getElementById('creditReportTabs').classList.remove('sticky');
//           }
//         };
//       }

//       // Popout window page unload listener
//       windowInstance.onbeforeunload = () => {
//         if (windowInstance.name.includes(PopoutModalName.creditPolicy)) {
//           this.setIsPopoutRefreshed(data.modalName, 'true');
//         }
//         if (windowInstance.name.includes(PopoutModalName.creditReport)) {
//           this.setIsPopoutRefreshed(data.modalName, 'true');
//         }
//       };
//     }
//   }
// }