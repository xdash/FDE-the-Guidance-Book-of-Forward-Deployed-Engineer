# Lời tựa

Mùa hè năm ngoái, bảng tin của tôi bị phủ kín bởi cùng một con số: 95%.

Một báo cáo của MIT cho biết trong ba năm trước đó, các doanh nghiệp trên toàn cầu đã đốt 30–40 tỷ USD cho generative AI. Trong số đó, 95% project không tạo ra bất kỳ giá trị nào có thể ghi vào báo cáo tài chính. Những người bạn làm model chia sẻ lại báo cáo, những người làm software cũng chia sẻ, người làm consulting cũng vậy. Mỗi người viết caption một kiểu, nhưng nỗi lo thì giống hệt nhau.

Điều thú vị là cũng trên những bảng tin ấy, tôi lại thấy một tin khác: trên các website tuyển dụng ở Silicon Valley, số tin tuyển dụng cho vị trí “Forward Deployed Engineer” — gọi tắt là FDE — đã tăng gấp tám lần trong vòng chín tháng. OpenAI tuyển dụng, Anthropic tuyển dụng, hơn một trăm startup trong hệ sinh thái YC cũng tuyển dụng. Có quỹ đầu tư mạo hiểm còn tuyên bố thẳng: đây là vị trí hot nhất hiện nay trong ngành công nghệ.

Một bên là tỷ lệ project enterprise AI chết lên tới 95%; một bên là độ hot của một vị trí tăng 800%. Đặt hai tin này cạnh nhau, câu trả lời thật ra không khó đoán: **bản thân model không còn khó tiếp cận; cái khó là tìm được người có thể đưa model vào business thực tế của khách hàng**.

Lần đầu tiên tôi nghiêm túc suy nghĩ về vai trò này là khi đọc lịch sử vươn lên của Palantir. Công ty được thành lập vào năm 2003 và trong suốt hai mươi năm đã kiên trì làm một việc rất “gàn” theo tiêu chuẩn của ngành software: đưa những engineer giỏi nhất đến tận hiện trường khách hàng — cơ quan tình báo, chiến trường, mỏ dầu, nhà máy — để họ lăn mình trong bùn dữ liệu của khách hàng và viết code. Phố Wall mất nhiều năm vẫn không hiểu, cho rằng công ty “trông giống một hãng consulting hơn”. Rồi sao? Năm 2025, vốn hóa thị trường của Palantir vượt 400 tỷ USD, các chỉ số sức khỏe tốt đến mức analyst phải thức đêm viết lại báo cáo.

Lần theo đường dây này, nhiều manh mối khác tiếp tục xuất hiện: OpenAI âm thầm thành lập FDE team vào năm 2024, rồi đến tháng 5 năm 2026 cùng 19 quỹ đầu tư hàng đầu thành lập một “deployment company” được định giá 10 tỷ USD; gần như cùng ngày, Anthropic cũng tuyên bố thành lập một joint venture tương tự với Blackstone. Đến đây có thể đưa ra một phán đoán khá rõ: FDE không phải một đợt tuyển dụng nhất thời, mà là một cuộc thay đổi triệt để trong phương thức software delivery.

## Vì sao tôi viết cuốn sách này

Trong mười năm qua, tôi luôn làm một việc: hệ thống hóa và giải thích rõ những điều đang diễn ra ở Silicon Valley nhưng vẫn chưa có tên gọi ở Trung Quốc. FDE đang đứng đúng ở một điểm quen thuộc của chu kỳ này — Silicon Valley đã đưa nó vào sơ đồ tổ chức, còn phần lớn thảo luận trong thế giới nói tiếng Trung vẫn dừng ở câu hỏi: “Đây có phải chỉ là presales đổi tên hay không?”

Tôi có thể nói ngay một cách có trách nhiệm: Không phải. Nhưng FDE thực sự là gì thì không thể giải thích bằng một câu. Muốn hiểu, phải quay lại nơi nó ra đời để kể từ đầu: Palantir đã bị những bức tường bảo mật của các cơ quan tình báo ép phải hình thành phương pháp này như thế nào; engineer của OpenAI đã deliver AI giữa những cánh đồng ở Iowa ra sao; một startup tên Harvey đã tiến vào những hãng luật hàng đầu — nơi ngay cả phần mềm thông thường cũng không thể chen chân — bằng cách nào; và mối quan hệ tinh tế giữa FDE với bài toán project-based nan giải lâu nay của ngành enterprise software Trung Quốc.

Để làm rõ những điều đó, tôi đã lục tìm mọi nguồn tư liệu gốc có thể kiếm được: một buổi retrospective dài 51 phút của lãnh đạo thời kỳ đầu Palantir trên podcast, hồi ký của các cựu nhân viên, những bản phân tích ngành của các quỹ đầu tư mạo hiểm, bản gốc của báo cáo MIT, hàng chục tin tuyển dụng của nhiều công ty, các báo cáo lương thưởng, những lời phàn nàn của người trong nghề trên các diễn đàn, cùng kinh nghiệm của những người đầu tiên thực hành FDE tại Trung Quốc. Cuốn sách này là phần kết tinh từ những tư liệu đó, đồng thời cũng là nhận định của cá nhân tôi.

## Cuốn sách này nên đọc thế nào

Chương 1 trước hết sẽ giải thích toàn bộ nguồn gốc và diện mạo của vai trò này: FDE xuất hiện từ đâu, là gì và vì sao lại là lúc này. Chương 2 đến Chương 7 đi dọc theo hành trình hoàn chỉnh của một lần delivery thực tế — giải quyết đúng vấn đề, giành được khách hàng, khiến system được sử dụng, giữ vững renewal, mở rộng business và biến thành công thành thứ có thể nhân rộng. Chương 8 quay lại những nơi FDE được hình thành để review đầy đủ một số hiện trường tiêu biểu nhất. Cuối sách sẽ bàn về ranh giới của nghề này; phần phụ lục cung cấp danh sách metric có thể dùng ngay, danh sách nhân vật, cùng nguồn của toàn bộ data và case trong sách.

Có thể sếp là một trong ba kiểu độc giả sau: một founder đang muốn dấn thân vào enterprise AI — sếp sẽ thấy một phương pháp phù hợp hơn với thời đại này; một engineer đang muốn chuyển hướng hoặc đã làm FDE — sếp sẽ thấy toàn cảnh và giới hạn phát triển của vị trí này; hoặc chỉ đơn giản là muốn hiểu AI rốt cuộc được đưa vào doanh nghiệp như thế nào — đây là bài toán thực sự trị giá hàng nghìn tỷ USD của thời đại hiện tại, và cuốn sách này được viết để đi thẳng vào nó.

Cuối cùng, tôi muốn nói một điều. Trong quá trình viết cuốn sách này, tôi nhiều lần nhớ đến một lẽ thật rất giản dị: những việc phức tạp không thể được giải quyết chỉ qua màn hình; rồi sẽ phải có người đến tận nơi. FDE chẳng qua chỉ biến sự thật hiển nhiên ấy thành một nghề nghiệp.

Mong cuốn sách này giúp sếp đưa AI từ phòng demo vào thế giới thực.

Fan Bing

Tháng 7 năm 2026
