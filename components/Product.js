import React from 'react'
import styles from '../styles/Product.module.css'
import Buy from "./Buy"

export default function product({product}) {

    const { id, name, price, description, image_url } = product

    return (
        <div className={styles.product_container} key={id}>
          <div >
            <img className={styles.product_image}src={image_url} alt={name} />
          </div>

          <div className={styles.product_details}>
            <div className={styles.product_text}>
              <div className={styles.product_title}>{name}</div>
              <div className={styles.product_description}>{description}</div>
            </div>

            <div className={styles.product_action}>
              <div className={styles.product_price}>{price} USDC</div>
              {/* I'm hardcoding these for now, we'll fetch the hash from the API later*/}
              <Buy itemID={id} />
            </div>
          </div>
        </div>
      )
}