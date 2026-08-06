# Phụ lục B: Danh sách nhân vật và team FDE

Phụ lục này liệt kê những nhân vật, team và nguồn tri thức mà chúng ta không thể bỏ qua nếu muốn hiểu mô hình FDE. Danh sách đầy đủ các nguồn được tham khảo trong quá trình viết sách nằm trong các research notes được công khai kèm bản thảo.

## I. Nhân vật chủ chốt

**Shyam Sankar** — President kiêm Chief Technology Officer của Palantir, nhân sự thời kỳ đầu. Ông được xem là người phát minh ra chiến lược FDE: người định nghĩa lại “custom tại hiện trường” — từ một khoản cost thành “product discovery”. Những phát biểu công khai của ông là nguồn tư liệu gốc quan trọng để hiểu triết lý Palantir.

**Bob McGrew** — engineer thời kỳ đầu tại PayPal, lãnh đạo thời kỳ đầu của Palantir, cựu Chief Research Officer của OpenAI (dẫn dắt việc phát triển ChatGPT, GPT-4 và o1). Ông là người diễn giải mô hình FDE tốt nhất. “Đường sỏi và đường cao tốc”, “làm những việc không thể scale ở quy mô lớn” — đều là những cách diễn đạt xuất phát từ ông. Nhất định phải nghe: podcast YC Lightcone *Cách làm FDE cho startup AI* (*FDE Playbook for AI Startups*, tháng 9/2025).

**Stephen Cohen** — đồng sáng lập Palantir, người phát minh ra vòng lặp demo; là nhân vật đứng sau những câu hỏi: “Thứ này tệ quá” và “Vậy các anh muốn nó khác đi ở điểm nào?”.

**Alex Karp** — CEO của Palantir, người đưa ra behavioral model “French waiter”: phản đối văn hóa engineering chỉ biết vâng dạ và nhận yêu cầu một cách thụ động.

**Barry** — cựu Forward Deployed Engineer của Palantir, tác giả bài viết *Understanding Forward Deployed Engineering*. Đây là một trong những “lời cảnh báo từ người trong cuộc” quan trọng nhất về mô hình FDE — một bản ghi chép chân thực về cost, sự hỗn loạn và burnout.

**Ted Mabrey / Nabeel Qureshi** — những cây viết thuộc hệ Palantir, đã công khai phân tích sâu về cách Palantir vận hành.

**Colin Jarvis** — cựu trưởng team Forward Deployed Engineering của OpenAI, người xây dựng bộ máy FDE của OpenAI từ con số không.

**Brad Lightcap** — COO của OpenAI, người chủ trì sáng kiến “Deployment Company”.

**Natalie Meurer** — người phụ trách Agent Engineering tại Sierra (từng làm việc 5 năm tại Palantir), người đặt tên cho role “Agent Engineer”. Nhất định phải nghe: cuộc phỏng vấn trên podcast Latent Space (tháng 7/2026).

**Bret Taylor / Clay Bavor** — các nhà sáng lập Sierra (Bret Taylor từng là Co-CEO của Salesforce; Clay Bavor từng là VP của Google). Họ là những người biến mô hình FDE thành chính business model — pricing theo outcome.

**Jesse Zhang / Ashwin Sreenivas** — các nhà sáng lập Decagon (Ashwin Sreenivas xuất thân từ Palantir). Họ là những người thiết kế operational workflow cho agent, đồng thời tạo ra một case mẫu về productize kinh nghiệm delivery.

**David Wakeling** — cựu phụ trách market innovation tại hãng luật Linklaters, supporter nội bộ phía khách hàng trong deployment lighthouse đầu tiên của Harvey. Đây là ví dụ tiêu biểu nhất cho góc nhìn của supporter phía khách hàng.

## II. Các team tiêu biểu

**Palantir FDE Organization** — nhà phát minh và hình thái hoàn chỉnh của mô hình. “Echo–Delta–Platform” là tam giác cốt lõi; bootcamp là cỗ máy đào tạo.

**OpenAI Forward Deployed Engineering Team** — được thành lập vào năm 2024, hoạt động theo mô hình phân tán trên toàn cầu, là team đứng sau các deployment với John Deere và BBVA; đến năm 2026 được nâng cấp thành “Deployment Company”.

**Anthropic Applied AI Team** — bộ máy FDE được xây dựng dưới tên gọi “Applied AI Engineer”, đồng kiến tạo agent financial crime cho FIS; năm 2026 cùng Blackstone và các bên khác thành lập joint venture cung cấp enterprise AI services.

**Sierra Agent Engineering Team** — hình thái cực hạn của pricing theo outcome kết hợp với managed delivery (thành lập năm 2023, đạt mức định giá 4,5 tỷ dollar vào tháng 10/2024 và sau đó được đưa tin là tiếp tục tăng).

**Harvey Deployment Team** — textbook về FDE trong một vertical industry là ngành luật (thành lập năm 2022, đạt mức định giá 11 tỷ dollar vào tháng 3/2026, với hơn 100.000 luật sư sử dụng).

**Scale AI / Databricks / Salesforce / Google Cloud / Mistral / Cohere** — mỗi công ty đều có team FDE hoặc role tương đương; tên gọi có thể khác nhau như solutions architect, customer engineer…, nhưng bộ khung thì giống nhau.

**Volcano Engine Doubao LLM FDE Team** — bộ máy FDE rõ nét nhất trong các tập đoàn Internet lớn của Trung Quốc (thành lập năm 2026, hoạt động trong các lĩnh vực ô tô, healthcare, giáo dục, tài chính và bán dẫn; cùng EY xây dựng team quy mô hàng nghìn người).

**Các FDE tiên phong tại Trung Quốc** — những nhà cung cấp dịch vụ nội địa lấy facility management trong lĩnh vực bất động sản và ngành tài chính làm địa bàn chính; họ đã công khai đưa ra định nghĩa mang tính nền tảng rằng “FDE không đồng nghĩa với onsite outsourcing”.

## III. Các nguồn tri thức (xếp theo mức độ quan trọng)

1. YC Lightcone podcast: *Cách làm FDE cho startup AI — phỏng vấn Bob McGrew* (*FDE Playbook for AI Startups*, tháng 9/2025) — cuộc nhìn lại kéo dài 51 phút của người kể chuyện quan trọng nhất về mô hình.
2. a16z: *Trading Margin for Moat* — tài liệu tham chiếu tiêu biểu về phân tích business model.
3. Barry: *Understanding Forward Deployed Engineering* — lời cảnh báo điềm tĩnh của một người trong cuộc.
4. Phòng thí nghiệm NANDA thuộc MIT: *The GenAI Divide: State of AI in Business 2025* — nguồn của con số “tỷ lệ thất bại 95%”, nền tảng dữ liệu giải thích vì sao FDE tồn tại.
5. The New Stack: *Why OpenAI and Anthropic Are Both Racing to Build FDE Teams* (tháng 5/2026).
6. CIO.com: *Anthropic’s Financial Agent Exposes the New Bottleneck: the Forward Deployed Engineer* (tháng 5/2026) — góc nhìn của bên mua và cảnh báo từ Gartner.
7. Latent Space podcast: *Forward Deployed Engineers and the Future of Software Engineering* (tháng 7/2026) — góc nhìn của Sierra.
8. Blog chính thức của Palantir: *A Day in the Life of a Palantir Forward Deployed Engineer* (2020) — lời tự thuật chính thức của công ty, đã có bản dịch tiếng Trung được lưu truyền.
9. Cộng đồng OpenFDE (open-fde.com) — cộng đồng open source của những người làm nghề, cùng bản đồ role và công ty.
10. 36Kr: *Phần mềm To B tại Trung Quốc thoát khỏi cái bẫy tăng trưởng bằng thua lỗ*; cùng series bài viết về FDE trên tài khoản WeChat của Chen Guo George — những tài liệu đối chiếu bắt buộc trong bối cảnh Trung Quốc.

## IV. Tham khảo về lương thưởng và tìm việc

- GetPerspective: *2026 FDE Compensation Report* (1.200 mẫu) — tại các lab hàng đầu, tổng thu nhập hằng năm median của FDE cấp mid-level khoảng 385.000 dollar, cấp senior khoảng 610.000 dollar, còn cấp principal vượt 1,2 triệu dollar.
- fdenest.com / fde.academy / sundeepteki.org — ba website chuyên về chuẩn bị phỏng vấn và lộ trình nghề nghiệp.
- Levels.fyi — dữ liệu lương thưởng cập nhật theo thời gian thực cho các role tại Palantir và nhiều công ty khác.
- Bản thân các tin tuyển dụng là giáo trình tốt nhất: hãy đọc kỹ từng chữ các tin tuyển dụng FDE của OpenAI, Anthropic, Decagon, Harvey và Scale AI.
