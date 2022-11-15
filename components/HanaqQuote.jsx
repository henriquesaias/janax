import React from 'react'

export default function HanaqQuote({ section }) {
  return (
    <>
      <section id="quote-container">
        <div id="hanaq-quote" className={section === 'quote' ? 'animate-into-view' : 'animate-out-of-view'}>
          <p>In the Native tribes from the Andes, <br />the Quechua people call “Hanaq Pacha” the Land of Heaven.</p>
        </div>
      </section>

      <section id='hidden-img' className='hidden-mobile'>
      </section>
    </>)
}