const blogs = [
  {
    title: 'Testi1',
    author: 'koira',
    url: '',
    likes: 4,
    user: {
      username: 'sepi',
      name: 'Sergei Polishsuk',
      id: '5d864a968528224b3b6e0ca2'
    },
    id: '5d89512835a4756ef80ecdf9'
  },
  {
    title: 'Testi2',
    author: 'apina',
    url: '',
    likes: 2,
    user: {
      username: 'sepi',
      name: 'Sergei Polishsuk',
      id: '5d864a968528224b3b6e0ca2'
    },
    id: '5d89514f35a4756ef80ecdfa'
  },
  {
    title: 'Testi3',
    author: '',
    url: '',
    likes: 3,
    user: {
      username: 'stina',
      name: 'Stina Palomaki',
      id: '5d8664e9a615e96ccbd48b1f'
    },
    id: '5d895bc08605d3949eaf0b90'
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}
export default { getAll, blogs }
