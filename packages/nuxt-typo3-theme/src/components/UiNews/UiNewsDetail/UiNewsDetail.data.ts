import type { NewsDetailElement } from './UiNewsDetail.types'

export const detailElementMockup: NewsDetailElement = {
  contentElements: [
    {
      id: 58,
      pid: 25,
      type: 'textpic',
      colPos: 0,
      categories: '',
      appearance: {
        layout: 'default',
        frameClass: 'container',
        spaceBefore: 'medium',
        spaceAfter: 'medium',
        proportions: ''
      },
      content: {
        header: 'Lorem ipsum',
        subheader: '',
        headerLayout: 0,
        headerPosition: '',
        headerLink: '',
        bodytext: '',
        gallery: {
          position: { horizontal: 'center', vertical: 'above', noWrap: false },
          width: 600,
          count: { files: 1, columns: 1, rows: 1 },
          columnSpacing: 10,
          border: { enabled: false, width: 2, padding: 0 },
          rows: {
            '1': {
              columns: {
                '1': {
                  publicUrl: 'https://via.placeholder.com/1366x695',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'image.jpg',
                    originalUrl: 'fileadmin/user_upload/image.jpg',
                    uidLocal: 7,
                    fileReferenceUid: 51,
                    size: '479 KB',
                    link: null,
                    dimensions: { width: 1366, height: 696 },
                    cropDimensions: { width: 1366, height: 696 },
                    crop: {
                      default: {
                        cropArea: { x: 0, y: 0, width: 1, height: 1 },
                        selectedRatio: 'NaN',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  }
                }
              }
            }
          }
        }
      }
    }
  ],
  detail: {
    uid: 1,
    title: 'Lorem ipsum dolor',
    teaser:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    isTopNews: false,
    bodytext:
      '<p>Lorem ipsum dolor</p>\r\n<p>Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>',
    crdate: 'May 13 2021',
    tstamp: 'May 20 2021',
    datetime: 'May 13 2021',
    archive: null,
    author: { author: '', authorEmail: '' },
    media: [
      {
        type: 'image',
        properties: {
          id: 48,
          type: 2,
          name: 'image.jpg',
          title: null,
          alternative: null,
          description: null,
          link: '',
          mimetype: 'image/jpeg',
          showInPreview: 1,
          creationTime: '2021-04-18 14:04:57',
          modificationTime: '2021-04-18 14:04:57'
        },
        images: {
          defaultImage: {
            publicUrl: 'https://via.placeholder.com/1366x696',
            dimensions: { width: 1366, height: 696 }
          },
          detailViewImage: {
            publicUrl: 'https://via.placeholder.com/1000x400',
            dimensions: { width: 1000, height: 400 }
          },
          listViewImage: { publicUrl: null, dimensions: null },
          listViewFeaturedImage: { publicUrl: null, dimensions: null },
          listViewVerticalImage: { publicUrl: null, dimensions: null }
        }
      },
      {
        type: 'image',
        properties: {
          id: 49,
          type: 2,
          name: 'image.jpg',
          title: null,
          alternative: null,
          description: null,
          link: '',
          mimetype: 'image/jpeg',
          showInPreview: 0,
          creationTime: '2021-04-18 14:04:57',
          modificationTime: '2021-04-18 14:04:57'
        },
        images: {
          defaultImage: {
            publicUrl: 'https://via.placeholder.com/1366x696',
            dimensions: { width: 1366, height: 696 }
          },
          detailViewImage: {
            publicUrl: 'https://via.placeholder.com/1000x400',
            dimensions: { width: 1000, height: 400 }
          },
          listViewImage: { publicUrl: null, dimensions: null },
          listViewFeaturedImage: { publicUrl: null, dimensions: null },
          listViewVerticalImage: { publicUrl: null, dimensions: null }
        }
      },
      {
        type: 'image',
        properties: {
          id: 50,
          type: 2,
          name: 'image_0.png',
          title: 'Lorem ipsum dolor',
          alternative: 'Lorem ipsum dolor',
          description: 'Lorem ipsum dolor',
          link: '',
          mimetype: 'image/png',
          showInPreview: 0,
          creationTime: '2021-04-22 13:31:11',
          modificationTime: '2021-04-22 13:31:11'
        },
        images: {
          defaultImage: {
            publicUrl: 'https://via.placeholder.com/348x112',
            dimensions: { width: 348, height: 112 }
          },
          detailViewImage: {
            publicUrl: 'https://via.placeholder.com/1000x400',
            dimensions: { width: 1000, height: 400 }
          },
          listViewImage: { publicUrl: null, dimensions: null },
          listViewFeaturedImage: { publicUrl: null, dimensions: null },
          listViewVerticalImage: { publicUrl: null, dimensions: null }
        }
      }
    ],
    categories: [],
    tags: [],
    metaData: { keywords: '', description: '', alternativeTitle: '' },
    pathSegment: 'test-1',
    canonical: '/aktualnosci/news/test-1'
  },
  settings: {
    action: '',
    templateLayout: ''
  }
}
