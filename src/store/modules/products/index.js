export default {
  state: {
    productList: [
      {
        id: 1,
        img: 'https://picsum.photos/400/250/?image=1',
        name: 'Product 1',
        description: 'Necessitatibus quo quos harum consectetur nemo facere possimus nesciunt.'
      },
      {
        id: 2,
        img: 'https://picsum.photos/400/250/?image=12',
        name: 'Product 2',
        description: 'Sed vel neque ullam sequi dolores qui error.'
      },
      {
        id: 3,
        img: 'https://picsum.photos/400/250/?image=30',
        name: 'Product 3',
        description: 'In natus distinctio velit doloremque eos recusandae sed.'
      },
      {
        id: 4,
        img: 'https://picsum.photos/400/250/?image=45',
        name: 'Product 4',
        description: 'Consequuntur repellat ut recusandae sunt consequatur laudantium quo animi eligendi.'
      },
      {
        id: 5,
        img: 'https://picsum.photos/400/250/?image=60',
        name: 'Product 5',
        description: 'Reiciendis quod animi ut ipsam eveniet in accusantium et voluptas.'
      },
      {
        id: 6,
        img: 'https://picsum.photos/400/250/?image=20',
        name: 'Product 6',
        description: 'Officia perferendis rerum itaque id animi.'
      }
    ]
  },
  getters: {
    productList: state => state.productList
  }
}
