import { rest } from 'msw';
import { setupServer } from 'msw/node';

const Server = setupServer(
	rest.get('/books', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					kind: 'books#volume',
					id: 'hDVQjwEACAAJ',
					etag: 'ABC123',
					selfLink:
						'https://books.googleapis.com/books/v1/volumes/hDVQjwEACAAJ',
					volumeInfo: {
						title: 'My Awesome Book',
						authors: ['John Doe'],
						publisher: 'Random House',
						publishedDate: '2022-03-01',
						description: 'This is an amazing book that will blow your mind!',
						industryIdentifiers: [
							{
								type: 'ISBN_10',
								identifier: '1234567890'
							},
							{
								type: 'ISBN_13',
								identifier: '9781234567890'
							}
						],
						readingModes: {
							text: false,
							image: false
						},
						pageCount: 200,
						printType: 'BOOK',
						categories: ['Non-fiction'],
						averageRating: 4.5,
						ratingsCount: 10,
						maturityRating: 'NOT_MATURE',
						allowAnonLogging: false,
						contentVersion: '1.0.0',
						panelizationSummary: {
							containsEpubBubbles: false,
							containsImageBubbles: true
						},
						imageLinks: {
							smallThumbnail: 'http://example.com/small-thumbnail.jpg',
							thumbnail: 'http://example.com/thumbnail.jpg'
						},
						language: 'en',
						previewLink: 'http://example.com/preview',
						infoLink: 'http://example.com/info',
						canonicalVolumeLink: 'http://example.com/book'
					},
					saleInfo: {
						country: 'US',
						saleability: 'FOR_SALE',
						isEbook: true,
						listPrice: {
							amount: 9.99,
							currencyCode: 'USD'
						},
						retailPrice: {
							amount: 7.99,
							currencyCode: 'USD'
						},
						buyLink: 'http://example.com/buy'
					},
					accessInfo: {
						country: 'US',
						viewability: 'PARTIAL',
						embeddable: true,
						publicDomain: false,
						textToSpeechPermission: 'ALLOWED',
						epub: {
							isAvailable: true,
							downloadLink: 'http://example.com/epub'
						},
						pdf: {
							isAvailable: true,
							downloadLink: 'http://example.com/pdf'
						},
						webReaderLink: 'http://example.com/reader',
						accessViewStatus: 'SAMPLE',
						quoteSharingAllowed: true
					},
					searchInfo: {
						textSnippet: 'This is an amazing book that will blow your mind!'
					}
				},
				{
					kind: 'books#volume',
					id: 'xyz123',
					etag: 'abc456',
					selfLink: 'https://books.googleapis.com/books/v1/volumes/xyz123',
					volumeInfo: {
						title: 'My Amazing Book',
						authors: ['Jane Doe'],
						publisher: 'Penguin',
						publishedDate: '2022-01-01',
						description:
							'This is an incredible book that will take you on a wild adventure!',
						industryIdentifiers: [
							{
								type: 'ISBN_10',
								identifier: '1234567890'
							},
							{
								type: 'ISBN_13',
								identifier: '9781234567890'
							}
						],
						readingModes: {
							text: true,
							image: false
						},
						pageCount: 300,
						printType: 'BOOK',
						categories: ['Fiction'],
						averageRating: 4.5,
						ratingsCount: 10,
						maturityRating: 'NOT_MATURE',
						allowAnonLogging: true,
						contentVersion: '1.0.0',
						panelizationSummary: {
							containsEpubBubbles: true,
							containsImageBubbles: false
						},
						imageLinks: {
							smallThumbnail:
								'http://books.google.com/books/content?id=xyz123&printsec=frontcover&img=1&zoom=5&source=gbs_api',
							thumbnail:
								'http://books.google.com/books/content?id=xyz123&printsec=frontcover&img=1&zoom=1&source=gbs_api'
						},
						language: 'en',
						previewLink:
							'http://books.google.com/books?id=xyz123&dq=my+amazing+book&hl=&cd=1&source=gbs_api',
						infoLink:
							'http://books.google.com/books?id=xyz123&dq=my+amazing+book&hl=&source=gbs_api',
						canonicalVolumeLink:
							'https://books.google.com/books/about/My_Amazing_Book.html?id=xyz123'
					},
					saleInfo: {
						country: 'US',
						saleability: 'FOR_SALE',
						isEbook: true,
						listPrice: {
							amount: 9.99,
							currencyCode: 'USD'
						},
						retailPrice: {
							amount: 7.99,
							currencyCode: 'USD'
						},
						buyLink:
							'https://books.google.com/books?id=xyz123&dq=my+amazing+book&hl=&buy=&source=gbs_api'
					},
					accessInfo: {
						country: 'US',
						viewability: 'PARTIAL',
						embeddable: true,
						publicDomain: false,
						textToSpeechPermission: 'ALLOWED',
						epub: {
							isAvailable: true,
							acsTokenLink:
								'https://books.google.com/books/download/My_Amazing_Book-sample-epub.acsm?id=xyz13&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
						},
						pdf: {
							isAvailable: false,
							downloadLink: 'http://example11.com/pdf'
						},
						webReaderLink: 'http://example111.com/reader',
						accessViewStatus: 'SAMPLE1',
						quoteSharingAllowed: true
					},
					searchInfo: {
						textSnippet: 'This is an amazing book that will blow your mind!'
					}
				}
			])
		);
	})
);
export default Server;
