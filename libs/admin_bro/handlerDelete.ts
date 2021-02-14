import { NotFoundError, populator } from 'admin-bro';

export const handlerDelete: any = async (
  request: any,
  _response: any,
  context: any
) => {
  const { record, resource, currentAdmin, h, translateMessage } = context;
  if (!record) {
    throw new NotFoundError(
      [
        `Record of given id ("${request.params.recordId}") could not be found`
      ].join('\n'),
      'Action#handler'
    );
  }

  const newRecord: any = await record.update({
    DeletedAt: Date.now(),
    Status: 'Inactive'
  });
  const [populatedRecord] = await populator([newRecord]);

  // eslint-disable-next-line no-param-reassign
  context.record = populatedRecord;

  if (record.isValid()) {
    return {
      redirectUrl: h.resourceUrl({
        resourceId: resource._decorated?.id() || resource.id()
      }),
      notice: {
        message: translateMessage('successfullyUpdated', resource.id()),
        type: 'success'
      },
      record: populatedRecord.toJSON(currentAdmin)
    };
  }
  return {
    record: populatedRecord.toJSON(currentAdmin),
    notice: {
      message: translateMessage('thereWereValidationErrors'),
      type: 'error'
    }
  };
};
