# Product Images

Drop real product photos here, one per product, named to match each
product's `image` path in `src/data/products.js`:

```
product-001.webp
product-002.webp
...
product-128.webp
```

If a file is missing, the site automatically shows a generated placeholder
(with the product number and name) instead of a broken image — nothing
breaks. Once you add the real file at the exact path, it will be used
automatically on the next page load.

Recommended: square images, 200×200px or larger, `.webp` format for small
file size (`.jpg`/`.png` also work if you also update the extension in
`src/data/products.js`).
