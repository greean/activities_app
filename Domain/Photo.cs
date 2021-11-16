namespace Domain
{
    public class Photo
    {
        // Id will be the publicId we get back from Cloudinary
        public string Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
    }
}