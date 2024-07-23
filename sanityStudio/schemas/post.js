export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Valor',
      type: 'string',
    },
    {
      name: 'comments',
      title: 'Comprador',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'comment' } }],
    },
    {
      name: 'mainImage',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
}
