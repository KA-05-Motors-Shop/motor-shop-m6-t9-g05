interface EditAdProps {
  title?: string;
  type_of_ad?: string;
  year?: number;
  km?: number;
  price?: number;
  description?: string;
  type_of_vehicle?: string;
  cover_image?: string;
  gallery_image?: string;
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
  published?: boolean;
}

export const getOnlyPastValues = (data: EditAdProps) => {
  for (const value in data) {
    !data[value] && delete data[value];
  }

  return data;
};
