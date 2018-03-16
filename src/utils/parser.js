const parser = data => {
  let result = {};
  if (data.data) {
    const { children, after, before } = data.data;
    result.posts = children.map(child => child.data);
    result.meta = { after, before };
  } else {
    result.post = data[0].data.children[0].data;
    // result.raw = data[1].data.children;
    result.comments = flatComments(data[1].data.children);
  }
  return result;
}

const flatComments = comments => {
  //if 0?
  let result = [];
  comments.forEach(({ data: cmt }) => {
    if (!cmt.children) {
      const replies = getReplies(cmt);        
      result.push([cmt, ...replies]);
    }
  });
  return result;
}

const getReplies = comment => {
  if (!comment.replies) {
    return [];
  }
  let replies = [];
  const { children } = comment.replies.data;
  children.forEach(child => {
    if (child.kind !== "more") {
      const rep = child.data;
      const moreReps = getReplies(rep);
      replies = replies.concat(rep, moreReps);
    }
  });
  return replies;
}

export default parser;
