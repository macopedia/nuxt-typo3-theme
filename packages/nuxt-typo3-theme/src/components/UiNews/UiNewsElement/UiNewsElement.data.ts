import type { NewsElement } from './UiNewsElement.types'

export const newsElementMockup: NewsElement = {
  archive: '',
  author: {},
  categories: [],
  crdate: '',
  datetime: '',
  falRelaredFiles: [],
  isTopNews: false,
  media: [
    {
      images: {
        detailViewImage: {
          dimensions: {},
          publicUrl: ''
        },
        defaultImage: {
          dimensions: {},
          publicUrl: ''
        },
        listViewImage: {
          dimensions: {},
          publicUrl: ''
        },
        listViewVerticalImage: {
          dimensions: {},
          publicUrl: ''
        },
        listViewFeaturedImage: {
          dimensions: {},
          publicUrl: 'https://via.placeholder.com/1366x695'
        }
      },
      type: 'image',
      properties: {
        id: 56,
        type: 2,
        name: 'p-y-l-szIheyGK4rM-unsplash.jpg',
        title: 'Lorem ipsum dolor',
        alternative: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor',
        link: '',
        mimetype: 'image/jpeg',
        showInPreview: 2,
        creationTime: '2021-04-18 11:49:56',
        modificationTime: '2021-04-18 11:49:56'
      }
    }
  ],
  metaData: {},
  pathSegment: '',
  slug: '',
  tags: [],
  teaser:
    'Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  title: 'Lorem ipsum dolor',
  tstamp: '',
  uid: 1
}
