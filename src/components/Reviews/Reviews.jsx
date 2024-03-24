import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/selectorsRedux/selectors';
import { BookingForm } from '../BookingForm/BookingForm';
import { ReviewsWrapper, LeftContent, RightContent, ReviewItem, ReviewHead, Avatar, NameRatingWrap, StarsList, Comment, StarIconWrapper, ReviewsUl, ReviewsP} from './Reviews.styled';
import StarIcon from '../../assets/icons/StarIcon';

const Reviews = () => {
    const camper = useSelector(selectCampersById);

  return (
    <ReviewsWrapper>
      <LeftContent>
        <ReviewsUl>
          {camper.reviews.map((review, index) => (
            <ReviewItem key={`${review.reviewer_name}/${index}`}>
              <ReviewHead>
                <Avatar>{review.reviewer_name.slice(0, 1)}</Avatar>
                <NameRatingWrap>
                  <ReviewsP>{review.reviewer_name}</ReviewsP>
                  <StarsList>
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <StarIconWrapper key={index}>
                          <StarIcon
                            fillColor={
                            index < Math.round(review.reviewer_rating)
                            ? "#FFC531"
                            : "#F2F4F7"
                            }
                          />
                        </StarIconWrapper>
                      ))}
                  </StarsList>
                </NameRatingWrap>
              </ReviewHead>
              <Comment>{review.comment}</Comment>
            </ReviewItem>
          ))}
        </ReviewsUl>
      </LeftContent>
      <RightContent>
        <BookingForm />
      </RightContent>
    </ReviewsWrapper>
  );
};

export default Reviews;
