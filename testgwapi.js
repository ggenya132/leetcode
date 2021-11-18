const getItemInfo = (itemId) => {
  let firstItemId;
  fetch(`https://api.guildwars2.com/v2/items/${itemId}`)
    .then((res) => res.json())
    .then((item) => {
      firstItemId = item.id;
      let {
        details: { suffix_item_id },
      } = item;

      return fetch(`https://api.guildwars2.com/v2/items/${suffix_item_id}`);
    })
    .then((res) => res.json())
    .then((updragedItem) => {
      const { id: updragedItemId } = updragedItem;
      return Promise.all([
        fetch(
          `https://api.guildwars2.com/v2/commerce/prices/${updragedItemId}`
        ),
        fetch(`https://api.guildwars2.com/v2/commerce/prices/${firstItemId}`),
      ]);
    })
    .then(([itemOne, itemTwo]) => {
      return [itemOne.json(), itemTwo.json()];
    })
    .then(([itemOne, itemTwo]) => {
      console.log({ itemOne, itemTwo });
    });
};
