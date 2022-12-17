import { motion } from 'framer-motion'
import React from 'react'
import { fadeBotVariants } from '../../variants/variants'
import './Footer.scss'

export default function Footer() {
  return (
    <motion.div className='container'
      variants={fadeBotVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className='footer'>
        <div className='footer__wrapper'>
          <div className='footer__logo'>
            <svg width="128" height="31" viewBox="0 0 128 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M31.2538 4.15451C32.7682 4.15451 34.1385 4.53593 35.3649 5.29065C36.5913 6.05079 37.5618 7.12471 38.2763 8.52055C38.9908 9.91639 39.3481 11.534 39.3481 13.3735C39.3481 15.213 38.9908 16.8415 38.2763 18.2589C37.5618 19.6764 36.5913 20.7747 35.3649 21.5538C34.1385 22.3328 32.7682 22.7224 31.2538 22.7224C29.9528 22.7224 28.8064 22.4519 27.8146 21.9108C26.8228 21.3698 26.0176 20.6881 25.3991 19.8658V31H20.92V4.44666H25.3991V7.04356C25.975 6.22391 26.7695 5.53411 27.7826 4.98227C28.7957 4.43043 29.9528 4.15451 31.2538 4.15451ZM49.074 4.15451C50.759 4.15451 52.268 4.5224 53.601 5.25819C54.9341 5.99398 55.9685 7.03815 56.7044 8.39071C57.4402 9.74326 57.8081 11.296 57.8081 13.0489C57.8081 13.6981 57.7655 14.2824 57.6802 14.8018H44.7229C44.8296 16.1003 45.2775 17.1174 46.0666 17.8532C46.8558 18.589 47.8263 18.9569 48.978 18.9569C50.6417 18.9569 51.8254 18.2319 52.5293 16.7819H57.3602C56.8483 18.5132 55.8672 19.9361 54.4169 21.0506C52.9665 22.1678 51.1855 22.7224 49.074 22.7224C47.3677 22.7224 45.8374 22.3382 44.483 21.57C43.1286 20.8017 42.0728 19.7143 41.3157 18.3076C40.5585 16.901 40.1799 15.2779 40.1799 13.4384C40.1799 11.58 40.5532 9.94614 41.2997 8.53678C42.0462 7.13012 43.0913 6.05079 44.435 5.29065C45.7787 4.53593 47.325 4.15451 49.074 4.15451ZM119.266 4.15451C120.951 4.15451 122.46 4.5224 123.793 5.25819C125.126 5.99398 126.16 7.03815 126.896 8.39071C127.632 9.74326 128 11.296 128 13.0489C128 13.6981 127.957 14.2824 127.872 14.8018H114.915C115.021 16.1003 115.469 17.1174 116.259 17.8532C117.048 18.589 118.018 18.9569 119.17 18.9569C120.834 18.9569 122.017 18.2319 122.721 16.7819H127.552C127.04 18.5132 126.059 19.9361 124.609 21.0506C123.158 22.1678 121.377 22.7224 119.266 22.7224C117.56 22.7224 116.029 22.3382 114.675 21.57C113.32 20.8017 112.265 19.7143 111.508 18.3076C110.75 16.901 110.372 15.2779 110.372 13.4384C110.372 11.58 110.745 9.94614 111.492 8.53678C112.238 7.13012 113.283 6.05079 114.627 5.29065C115.971 4.53593 117.517 4.15451 119.266 4.15451ZM4.42572 16.3326L12.6639 21.1748C12.344 21.4453 11.9708 21.6887 11.5709 21.9052C10.5577 22.4462 9.38465 22.7167 8.05161 22.7167C6.74522 22.7167 5.51882 22.4191 4.42572 21.797V16.3326ZM86.2484 4.44747V14.3482C86.2484 15.7765 86.6003 16.8747 87.3042 17.643C88.008 18.4112 88.9678 18.7954 90.1836 18.7954C91.4206 18.7954 92.3911 18.4112 93.095 17.643C93.7988 16.8747 94.1507 15.7765 94.1507 14.3482V4.44747H98.6618V22.431H94.1507V20.1587C93.5749 20.9378 92.823 21.5492 91.8952 21.9928C90.9674 22.4364 89.9596 22.6583 88.8719 22.6583C87.4855 22.6583 86.2591 22.3607 85.1926 21.7656C84.1262 21.1704 83.2891 20.294 82.6812 19.1362C82.0733 17.9784 81.7694 16.5988 81.7694 14.9974V4.44747H86.2484ZM69.0697 4.18805V8.95986H67.886C66.4783 8.95986 65.4172 9.29529 64.7027 9.96616C63.9881 10.637 63.6309 11.8056 63.6309 13.472V22.4313H59.1518V4.44774H63.6309V7.23941C64.2068 6.28721 64.9586 5.5406 65.8864 4.99958C66.8142 4.45856 67.8753 4.18805 69.0697 4.18805ZM110.436 4.18805V8.95986H109.252C107.844 8.95986 106.783 9.29529 106.069 9.96616C105.354 10.637 104.997 11.8056 104.997 13.472V22.4313H100.518V4.44774H104.997V7.23941C105.573 6.28721 106.325 5.5406 107.252 4.99958C108.18 4.45856 109.241 4.18805 110.436 4.18805ZM76.6524 0V4.4472H80.6195V8.18025H76.6524V16.8799C76.6524 17.4858 76.7963 17.924 77.0843 18.1946C77.3722 18.4651 77.8574 18.6003 78.5399 18.6003H80.6195V22.4308H77.8041C74.0289 22.4308 72.1413 20.5696 72.1413 16.8474V8.18025H70.0298V4.4472H72.1413V0H76.6524ZM18.4494 12.572V22.4186H13.9437V19.7946C13.7304 20.1192 13.4904 20.4168 13.1972 20.6873L8.87809 18.1716L18.4494 12.572ZM3.75919 11.5167V21.3904C2.63943 20.6329 1.73296 19.605 1.06644 18.2524C0.399914 16.9269 0.0533219 15.4121 0 13.7079L3.75919 11.5167ZM30.0701 8.14725C29.2596 8.14725 28.4971 8.35824 27.7826 8.78024C27.0681 9.20224 26.4922 9.81359 26.0549 10.6143C25.6177 11.415 25.3991 12.3564 25.3991 13.4384C25.3991 14.5205 25.6177 15.4646 26.0549 16.2626C26.4922 17.0633 27.0681 17.6746 27.7826 18.0966C28.4971 18.5186 29.2596 18.7296 30.0701 18.7296C30.9019 18.7296 31.6751 18.5132 32.3896 18.0804C33.1041 17.6476 33.68 17.0308 34.1172 16.2301C34.5545 15.4294 34.7731 14.4772 34.7731 13.3735C34.7731 12.2915 34.5545 11.3555 34.1172 10.5656C33.68 9.77572 33.1041 9.17519 32.3896 8.76401C31.6751 8.35283 30.9019 8.14725 30.0701 8.14725ZM18.4488 4.45667V11.7875L12.6634 15.1689V5.70102C13.17 6.07973 13.5965 6.51255 13.9431 6.99947V4.45667H18.4488ZM3.09267 5.9177L7.54505 8.5146L0.0266609 12.9239C0.0533219 11.2738 0.399914 9.81305 1.06644 8.54165C1.59966 7.48666 2.29284 6.62102 3.09267 5.9177ZM48.946 7.88755C47.8369 7.88755 46.9038 8.2284 46.1466 8.91009C45.3895 9.59177 44.9256 10.5386 44.7549 11.7505H53.1691C53.1478 10.5818 52.7319 9.64587 51.9214 8.94255C51.1109 8.23922 50.1191 7.88755 48.946 7.88755ZM119.138 7.88755C118.029 7.88755 117.096 8.2284 116.339 8.91009C115.581 9.59177 115.117 10.5386 114.947 11.7505H123.361C123.34 10.5818 122.924 9.64587 122.113 8.94255C121.303 8.23922 120.311 7.88755 119.138 7.88755ZM8.10439 4.15937C9.41078 4.15937 10.5572 4.42989 11.5703 4.97091C11.7036 5.05206 11.8636 5.13321 11.9969 5.24142V10.3541L3.70534 5.48488C3.78532 5.40372 3.89196 5.34962 3.97195 5.29552C5.19835 4.53809 6.58472 4.15937 8.10439 4.15937Z" fill="white" />
            </svg>
            <p>Photographers & videographers capturing the world around us.</p>
          </div>
          <div className='footer__nav'>
            <ul className='footer__links'>
              <h6>BUSSINES AREAS</h6>
              <li><a href="#">Product Photography</a></li>
              <li><a href="#">Architecture Photography</a></li>
              <li><a href="#">Drone Photography</a></li>
              <li><a href="#">Wildlife Photography</a></li>
            </ul>
            <ul className='footer__links'>
              <h6>PAGES</h6>
              <li><a href="#">Gear cage</a></li>
              <li><a href="#">Featured images</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Style guide</a></li>
              <li><a href="#">Instructions</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
        </div>
        <div>
          <hr />
          <div className='footer__subs'>
            <div>
              <h6>SUBSCRIBE TO OUR NEW NEWSLETTER</h6>
              <p>Read about all the things we do.</p>
            </div>
            <div className='footer__input'>
              <input type="text" />
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className='footer__rights'>
            <p>© deh3k. All rights reserved.</p>
            <div className='footer__contacts'>
              <a href="#">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2.55654C23.1169 2.94873 22.168 3.21203 21.1724 3.3327C22.1899 2.72384 22.9688 1.75844 23.3363 0.609283C22.3846 1.17426 21.3288 1.58291 20.2098 1.80506C19.313 0.84789 18.0322 0.25 16.6171 0.25C13.8965 0.25 11.6915 2.45232 11.6915 5.173C11.6915 5.5597 11.7353 5.93544 11.8176 6.29473C7.72575 6.08903 4.09736 4.1308 1.67021 1.14958C1.24786 1.87637 1.00377 2.72384 1.00377 3.62616C1.00377 5.33481 1.87316 6.84051 3.19232 7.72363C2.38601 7.69895 1.62633 7.47679 0.962633 7.10654V7.16962C0.962633 9.5557 2.66027 11.5441 4.9119 11.9966C4.50051 12.1091 4.06445 12.1694 3.61467 12.1694C3.29654 12.1694 2.98937 12.1392 2.69044 12.0816C3.31574 14.0371 5.13404 15.4605 7.28694 15.5017C5.60302 16.8209 3.48303 17.608 1.17381 17.608C0.77614 17.608 0.386699 17.5861 0 17.5395C2.18032 18.9354 4.76654 19.75 7.54748 19.75C16.6034 19.75 21.5564 12.2489 21.5564 5.74346C21.5564 5.52954 21.5509 5.31835 21.5427 5.10717C22.5053 4.41055 23.3418 3.54388 24 2.55654Z" fill="#C0C0C0" />
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5.76825C8.5638 5.76825 5.76825 8.5638 5.76825 12C5.76825 15.4362 8.5638 18.2293 12 18.2293C15.4362 18.2293 18.2293 15.4338 18.2293 12C18.2317 8.5638 15.4362 5.76825 12 5.76825ZM12 15.8536C9.87422 15.8536 8.14641 14.1258 8.14641 12C8.14641 9.87422 9.87422 8.14641 12 8.14641C14.1258 8.14641 15.8536 9.87422 15.8536 12C15.8536 14.1258 14.1258 15.8536 12 15.8536ZM17.0936 0H6.90637C3.09889 0 0 3.09889 0 6.90637V17.0936C0 20.9011 3.09889 24 6.90637 24H17.0936C20.9011 24 24 20.9011 24 17.0936V6.90637C24 3.09889 20.9035 0 17.0936 0ZM21.6243 17.0936C21.6243 19.5907 19.5907 21.6218 17.0936 21.6218H6.90637C4.4093 21.6218 2.37816 19.5907 2.37816 17.0936V6.90637C2.37816 4.4093 4.4093 2.37816 6.90637 2.37816H17.0936C19.5907 2.37816 21.6218 4.4093 21.6218 6.90637V17.0936H21.6243ZM18.3167 3.96764C17.4188 3.96764 16.6859 4.69808 16.6859 5.59838C16.6859 6.49626 17.4164 7.22912 18.3167 7.22912C19.2146 7.22912 19.9474 6.49869 19.9474 5.59838C19.9474 4.69808 19.2146 3.96764 18.3167 3.96764Z" fill="#C0C0C0" />
                </svg>
              </a>
              <a href="#">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.625 7.7714H7.79015V5.2806C7.79015 4.34518 8.41822 4.12573 8.85815 4.12573H11.5586V0.0137159L7.83442 0C3.70352 0 2.76556 3.06686 2.76556 5.03098V7.7714H0.375V12.0069H2.76556V24H7.79292V12.0096H11.1851L11.625 7.7714Z" fill="#C0C0C0" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
