import {
  Observable,
  of
} from 'rxjs';
import { LegalContentItem } from './legal-content';
import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root'
})
export class ApiService {
  legalContents: any;
  constructor(){
    this.legalContents = {
   "content":[
      {
         "date":"20190315171609",
         "program":"GreenSky Patient Solutions",
         "title":"GSPS - PreQual - Footer Contact Section",
         "type":"footerContactSection",
         "body":"<div class=\"col-md-3 col-sm-4 col-xs-12 footer-contact-container\">  <h3 tabindex=\"0\"      class=\"get-in-touch\">Get in Touch<\/h3>  <ul class=\"footer-contact\">    <li>      <i class=\"fas fa-phone\"          aria-hidden=\"true\"><\/i>      <div>        <span tabindex=\"0\">844-810-7713<\/span>      <\/div>    <\/li>    <li>      <i class=\"fas fa-clock\"          aria-hidden=\"true\"><\/i>      <div>        <span tabindex=\"0\">Monday - Saturday <br class=\"visible-sm visible-md\" />6AM - 1AM EST<\/span>        <span tabindex=\"0\">Sunday <br class=\"visible-sm visible-md\" />8AM - 12AM EST <\/span>      <\/div>    <\/li>  <\/ul><\/div>",
         "version":0
      },
      {
         "date":"20190315171609",
         "program":"GreenSky Consumer Projects",
         "title":"GSPS - PreQual - Footer Contact Section",
         "type":"footerContactSection",
         "body":"<div class=\"col-md-3 col-sm-4 col-xs-12 footer-contact-container\">  <h3 tabindex=\"0\"      class=\"get-in-touch\">Get in Touch<\/h3>  <ul class=\"footer-contact\">    <li>      <i class=\"fas fa-phone\"          aria-hidden=\"true\"><\/i>      <div>        <span tabindex=\"0\">866-936-0602<\/span>      <\/div>    <\/li>    <li>      <i class=\"fas fa-clock\"          aria-hidden=\"true\"><\/i>      <div>        <span tabindex=\"0\">Monday - Saturday <br class=\"visible-sm visible-md\" />8AM - 11PM EST<\/span>        <span tabindex=\"0\">Sunday <br class=\"visible-sm visible-md\" />8AM - 8PM EST <\/span>      <\/div>    <\/li>  <\/ul><\/div>",
         "version":0
      },
      {
         "date":"20190315171609",
         "program":"Retail Furniture",
         "title":"GSPS - PreQual - Footer Contact Section",
         "type":"footerContactSection",
         "body":"<div class=\"col-md-3 col-sm-4 col-xs-12 footer-contact-container\">  <h3 tabindex=\"0\"      class=\"get-in-touch\">Get in Touch<\/h3>  <ul class=\"footer-contact\">    <li>      <i class=\"fas fa-phone\"          aria-hidden=\"true\"><\/i>      <div>        <span tabindex=\"0\">855-707-4925<\/span>      <\/div>    <\/li>    <li>      <i class=\"fas fa-clock\"          aria-hidden=\"true\"><\/i>      <div>        <span tabindex=\"0\">Monday - Saturday <br class=\"visible-sm visible-md\" />10AM - 10PM EST<\/span>        <span tabindex=\"0\">Sunday <br class=\"visible-sm visible-md\" />10AM - 5PM EST <\/span>      <\/div>    <\/li>  <\/ul><\/div>",
         "version":0
      },
      {
         "date":"20190315134627",
         "program":"GreenSky Patient Solutions",
         "title":"Customer TFN - GSPS",
         "type":"customerTFN",
         "body":"844-810-7713",
         "version":0
      },
      {
         "date":"20190315132044",
         "program":"eCommerce,GreenSky Patient Solutions,Retail Furniture",
         "title":"GreenSky Footer",
         "type":"mainFooter",
         "body":"GreenSky<span class=\"regMarkFooter\">&reg;<\/span> and GreenSky Patient Solutions<span class=\"regMarkFooter\">&reg;<\/span> are loan program names for certain consumer credit plans extended by participating lenders to borrowers for the purchase of goods and/or services from participating merchants/providers. Participating lenders are federally insured, federal and state chartered financial institutions providing credit without regard to age, race, color, religion, national origin, gender or familial status. GreenSky<span class=\"regMarkFooter\">&reg;<\/span> and GreenSky Patient Solutions<span class=\"regMarkFooter\">&reg;<\/span> are registered trademarks of GreenSky, LLC. GreenSky Servicing, LLC services the loans on behalf of participating lenders.",
         "version":0
      },
      {
         "date":"20190314113503",
         "program":"GreenSky Consumer Direct,GreenSky Patient Solutions,Retail Furniture,GreenSky Consumer Projects",
         "title":"NMLS  License Number",
         "type":"licenseNumbers",
         "body":"NMLS #1416362",
         "version":0
      },
      {
         "date":"20190313223405",
         "program":"GreenSky Patient Solutions",
         "title":"PreQual Disclosure Accept - GSPS Web",
         "type":"prequalDisclosureAccept",
         "body":"<li tabindex=\"0\">  You are providing \u2018written instructions\u2019 to the GreenSky<sup>®<\/sup> Program under the Fair Credit Reporting Act  authorizing the GreenSky<sup>®<\/sup> Program to obtain information from your personal credit profile or other  information from Experian. You authorize the GreenSky<sup>®<\/sup> Program to obtain such information solely to  conduct a pre-qualification for credit. GreenSky may share the Prequalification decision with your Healthcare Provider.<\/li><li tabindex=\"0\">You have read, understand, and accept GreenSky's <a href=\"https://www.greensky.com/terms/website_terms_of_use.pdf\"    target=\"_blank\"><span class=\"prequalifyAgreementCopyGreen\">Terms of Use<\/span><\/a>, and GreenSky\u2019s <a href=\"https://www.greensky.com/privacy-policy/\"    target=\"_blank\"><span class=\"prequalifyAgreementCopyGreen\">Privacy Notice<\/span><\/a> and GreenSky\u2019s <a href=\"https://www.greenskycredit.com/information\"    target=\"_blank\"><span class=\"prequalifyAgreementCopyGreen\">Consent to Electronic Records and Communication<\/span><\/a>.<\/li><li tabindex=\"0\">When you check your rate and review loan offers, a soft inquiry will be performed on your credit  report, which won\u2019t impact your credit score. Soft inquiries can only be seen by you. When you accept a loan offer  and submit it for  review, a hard inquiry will be performed, which may impact your credit score and can be viewed by third parties.<\/li>",
         "version":0
      },
      {
         "date":"20190313124346",
         "program":"GreenSky Patient Solutions",
         "title":"Sales TFN - GSPS",
         "type":"salesTFN",
         "body":"844-810-7713",
         "version":0
      },
      {
         "date":"20190312183917",
         "program":"GreenSky Patient Solutions",
         "title":"GSPS - PreQual - GreenSky Footer Links",
         "type":"footerLinks",
         "body":"                                                                                                                                                                        <ul class=\"list inline\"><li class=\"list-inline-item\">    <a href=\"https://www.dev.greensky.com/privacy-policy/\" target=\"_blank\" class=\"text-white\">Privacy Policy<\/a><\/li><li class=\"list-inline-item visible-xs-inline-block\">|<\/li><li class=\"list-inline-item\">    <a href=\"https://www.dev.greensky.com/terms/website_terms_of_use.pdf\" target=\"_blank\" class=\"text-white\">Terms of Use<\/a><\/li><li class=\"list-inline-item visible-xs-inline-block\">|<\/li><li class=\"list-inline-item\">    <a href=\"https://www.dev.greensky.com/accessibility/\" target=\"_blank\" class=\"text-white\">Accessibility<\/a><\/li><\/ul>",
         "version":0
      },
      {
         "date":"20190312114644",
         "program":"Retail Furniture",
         "title":"Customer TFN - Furniture",
         "type":"customerTFN",
         "body":"855-707-4925",
         "version":0
      },
      {
         "date":"20190312114438",
         "program":"Retail Furniture",
         "title":"Sales TFN - Furniture",
         "type":"salesTFN",
         "body":"855-707-4925",
         "version":0
      },
      {
         "date":"20190311145911",
         "program":"GreenSky Consumer Projects",
         "title":"GreenSky Footer - GSCP",
         "type":"mainFooter",
         "body":"GreenSky<sup>&reg;<\/sup> is a program name for certain consumer loans and credit plans extended by participating lenders to    borrowers for    the purchase of goods and/or services from participating merchants/providers. Participating lenders are federally insured,    federal and state chartered financial institutions providing credit without regard to age, race, color, religion, national    origin, gender or familial status. GreenSky<sup>&reg;<\/sup> and GreenSky Patient Solutions<sup>&reg;<\/sup> are a registered    trademark    of GreenSky, LLC.    GreenSky Servicing, LLC services the loans on behalf of participating lenders.",
         "version":0
      },
      {
         "date":"20190306221345",
         "program":"GreenSky Consumer Projects",
         "title":"Customer TFN - GSCP",
         "type":"customerTFN",
         "body":"866-936-0602",
         "version":0
      },
      {
         "date":"20190306140717",
         "program":"GreenSky Consumer Projects",
         "title":"Sales TFN - GSCP",
         "type":"salesTFN",
         "body":"866-936-0602",
         "version":0
      },
      {
         "date":"20190227150400",
         "program":"GreenSky Consumer Projects,Retail Furniture",
         "title":"GSCP - PreQual - GreenSky Footer Links",
         "type":"footerLinks",
         "body":"                                                                                                                                                                        <ul class=\"list inline\"><li class=\"list-inline-item\">  <a href=\"https://greenskycredit.com/information\" target=\"_blank\" class=\"text-white\">    Important Information and Electronic Consent  <\/a><\/li><li class=\"list-inline-item\">|<\/li><li class=\"list-inline-item\">    <a href=\"https://www.dev.greensky.com/privacy-policy/\" target=\"_blank\" class=\"text-white\">Privacy Policy<\/a><\/li><li class=\"list-inline-item\">|<\/li><li class=\"list-inline-item\">    <a href=\"https://www.dev.greensky.com/terms/website_terms_of_use.pdf\" target=\"_blank\" class=\"text-white\">Terms of Use<\/a><\/li><li class=\"list-inline-item\">|<\/li><li class=\"list-inline-item\">    <a href=\"https://www.dev.greensky.com/accessibility/\" target=\"_blank\" class=\"text-white\">Accessibility<\/a><\/li><\/ul>",
         "version":0
      }
   ]
};
  }
  getLegalContent(): Observable<any[]> {
    return of(this.legalContents);
  }
}