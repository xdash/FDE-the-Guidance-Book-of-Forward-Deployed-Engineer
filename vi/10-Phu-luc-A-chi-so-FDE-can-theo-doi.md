# Phụ lục A: Các chỉ số phổ biến FDE cần theo dõi

Phụ lục này trình bày hệ thống metrics cho toàn bộ chuỗi công việc của FDE, được tổ chức thành bốn tầng: delivery, customer, commercial và organization. Metrics nên ít nhưng tinh — mỗi dự án khách hàng chỉ cần theo sát 3 đến 5 chỉ số cốt lõi vẫn tốt hơn là phủ kín cả một bức tường bằng dashboard.

## I. Metrics cấp delivery (dự án có làm đúng không?)

**TTV (Time to Value, thời gian đạt được value):** Khoảng thời gian từ khi bắt đầu vào hiện trường đến khi khách hàng nhận được value đầu tiên có thể đo lường. Đây là chỉ số sinh tử của mô hình FDE. Mốc tham chiếu: việc xác minh một minimum viable deployment nên tính theo tuần (2 đến 6 tuần), còn một deployment hoàn chỉnh nên tính theo tháng (1 đến 4 tháng). TTV liên tục kéo dài là tín hiệu đầu tiên cho thấy methodology hoặc platform foundation đang có vấn đề.

**Tỷ lệ chuyển đổi từ concept validation sang paid deployment:** Tỷ lệ các dự án validation chuyển sang deployment có trả phí. Palantir đã nâng chỉ số này từ mức 5% đến 10% thời kỳ đầu lên khoảng 75% theo số liệu công ty công bố (một số cách tính khác cho rằng có những khóa còn cao hơn) — chỉ số này đồng thời đo cả “chất lượng sàng lọc khách hàng” lẫn “chất lượng delivery”. Tỷ lệ quá thấp cho thấy khâu sàng lọc trước khi vào hiện trường đang có vấn đề; tỷ lệ quá cao, gần 100%, thì cần kiểm tra xem có phải team chỉ nhận những deal không có thách thức hay không.

**Tỷ lệ đạt evaluation:** Tỷ lệ output của AI vượt qua business evaluation set, cùng diễn biến của tỷ lệ đó theo thời gian trong production. Đây là hệ thống cảnh báo sớm cho quality drift.

**Tần suất deployment và tỷ lệ rollback:** Hai hard metric phản ánh tốc độ iteration. Một giai đoạn deployment khỏe mạnh phải duy trì nhịp độ cao với những bước nhỏ — theo tuần, thậm chí theo ngày — trong khi tỷ lệ rollback thấp và ổn định.

**Tỷ lệ defect escape:** Tỷ lệ các defect chỉ được phát hiện sau khi đã go-live. Chỉ số này đo mức độ hoàn thiện của hệ thống testing và evaluation, không phải năng lực của engineer.

## II. Metrics cấp customer (khách hàng có đang vận hành khỏe không?)

**Tỷ lệ activation:** Tỷ lệ người dùng thuộc nhóm mục tiêu đã hình thành thói quen sử dụng ổn định. Lưu ý: mẫu số phải là “nhóm người dùng mục tiêu”, không phải “số lượng tài khoản trong system”. Báo cáo của MIT đưa ra một ngưỡng cảnh báo đáng chú ý của ngành: chỉ khoảng 40% doanh nghiệp cung cấp subscription AI chính thức cho nhân viên — nếu activation rate của bạn liên tục ở mức thấp, deployment có vẻ vẫn sống trên danh nghĩa nhưng thực tế đã chết.

**Độ sâu sử dụng:** Có bao nhiêu người đang dùng các feature quan trọng, họ dùng trong bao nhiêu use case; phân bố tần suất sử dụng — dùng kiểu điểm danh cho có hay đã thực sự được nhúng vào workflow — và liệu đã xuất hiện hành vi tự khám phá hay chưa. Khi người dùng bắt đầu tự mình phát hiện ra cách dùng mới, đó là tín hiệu đáng giá nhất.

**Health score:** Điểm tổng hợp từ bốn nhóm tín hiệu: usage, value, relationship và commercial (xem mục 5.6). Kỷ luật cốt lõi: mỗi tuần phải rà soát toàn bộ; khi điểm rơi xuống dưới ngưỡng cảnh báo, quy trình intervention phải được kích hoạt tự động.

**Số lượng supporter được bao phủ:** Số lượng và phân bố cấp bậc của những đồng minh đang active trong tổ chức khách hàng. Chỉ có một điểm tựa là rủi ro cao; ba điểm tựa mới tạo thành một network.

**Thận trọng khi dùng NPS:** Net Promoter Score (NPS — chỉ số hỏi “Bạn có khả năng giới thiệu chúng tôi cho người khác đến mức nào?”) có giá trị tham khảo hạn chế trong bối cảnh enterprise — vì sample nhỏ và dễ bị chính trị hóa. Một lựa chọn thay thế đáng tin cậy hơn là “hỏi trước về ý định renewal”: trước ngày hết hạn hai quý, hãy hỏi thẳng supporter: “Nếu hôm nay đến hạn renew, anh/chị có renew không?”

## III. Metrics cấp commercial (mô hình kinh doanh có đáng giá không?)

**NRR (Net Revenue Retention, tỷ lệ giữ lại doanh thu thuần):** Mức thay đổi doanh thu hằng năm của nhóm khách hàng hiện hữu, bao gồm churn, downgrade và expansion. Đây là tổng trọng tài của mô hình kinh doanh FDE. Mốc đạt yêu cầu là 100%, mốc xuất sắc là 120%. Với những công ty có NRR trên 120%, growth engine đã có thể tự vận hành từ bên trong.

**Delivery gross margin:** Doanh thu từ một khách hàng trừ đi các chi phí delivery trực tiếp — nhân lực, công tác phí và cloud resources. Mốc đạt yêu cầu của mô hình FDE thay đổi theo mức độ platformization: trong giai đoạn delivery thuần túy bằng nhân lực, gross margin có thể chỉ ở mức 20% đến 40%; khi khả năng reuse của platform tăng lên, con số này phải hướng tới trên 60%. Tốc độ tăng của gross margin cho thấy mô hình có thành công hay không rõ hơn mức tuyệt đối — FDE không tăng thì chẳng khác gì một consulting firm.

**Mức giảm customization:** Đây là bài test của McGrew — khối lượng công việc custom cho khách hàng thứ N phải nhỏ hơn đáng kể so với khách hàng đầu tiên. Nếu lượng customization không giảm qua ba khách hàng liên tiếp, phải lập tức kiểm tra lại cơ chế đưa learning từ khách hàng quay trở vào product.

**Sales cycle:** Khoảng thời gian từ lần tiếp xúc đầu tiên đến khi ký hợp đồng. Palantir đã dùng bootcamp để rút ngắn khoảng thời gian này từ 9 đến 12 tháng xuống còn vài tuần. Đây là chỉ số tổng hợp phản ánh hiệu quả thu hút khách hàng và độ dày của trust asset.

**Thời gian hoàn vốn CAC:** Khoảng thời gian cần để thu hồi chi phí thu hút khách hàng (CAC — Customer Acquisition Cost, bao gồm cả chi phí đầu tư cho free validation) bằng gross profit từ hợp đồng. Giai đoạn đầu của mô hình FDE thường cho ra con số không đẹp; điều quan trọng là phải thấy thời gian này ngắn dần khi số lượng case tích lũy tăng lên.

**LTV/CAC:** Tỷ lệ giữa giá trị vòng đời khách hàng (LTV — Lifetime Value) và chi phí thu hút khách hàng. Ngưỡng lành mạnh của business enterprise thường từ 3 trở lên; do CAC trong mô hình FDE được dồn nhiều vào giai đoạn đầu, tỷ lệ này có thể dưới 2 trong thời kỳ đầu. Vì vậy, chỉ số này phải được đọc cùng NRR mới có ý nghĩa.

## IV. Metrics cấp organization (team có thể đi đường dài không?)

**Tốc độ chuyển hóa từ hiện trường thành product:** Số lượng output được tạo ra trong một đơn vị thời gian, khi những gì tích lũy tại hiện trường được chuyển hóa thành component hoặc platform capability — chẳng hạn số component được đưa vào thư viện, số lần cập nhật playbook và số đề xuất platformization. Chỉ số này đo xem “cơ quan linh hồn” của mô hình FDE còn đang đập hay không.

**Tỷ lệ reuse delivery asset:** Tỷ lệ component, template và checklist có sẵn được reuse trong các project mới. Đây là chỉ số tổng hợp phản ánh đòn bẩy scale ba cấp độ (Chương 7); mục tiêu là tỷ lệ này phải tăng qua từng quý.

**Năng suất bình quân đầu người của FDE:** Doanh thu hằng năm được mỗi frontline deployment engineer hỗ trợ. Đây là sổ tổng kết về khả năng scale: mô hình thuần nhân lực có trần rất rõ, còn sau khi platform hóa, chỉ số này phải liên tục tăng lên.

**Metrics về sức bền của team:** Cường độ công tác — số ngày đi công tác mỗi tháng — tải on-call, tỷ lệ nghỉ việc và các tín hiệu cảnh báo burnout. Trên Reddit, điều người làm FDE phàn nàn nhiều nhất chính là công tác và sức bền — khi team đã bị vắt kiệt, mọi metrics phía trước đều chỉ còn là pháo hoa.

## Gợi ý sử dụng

1. Với mỗi dự án khách hàng, hãy chốt một “tổ hợp core metrics” gồm 3 đến 5 chỉ số: thông thường là một chỉ số về value, một chỉ số về usage và một chỉ số về relationship.
2. Thu thập dữ liệu baseline ngay trong ngày đầu tiên khởi động project — bỏ lỡ là không bao giờ lấy lại được.
3. Metrics phải được xây dựng cùng khách hàng và được cả hai bên công nhận; nếu không, chúng sẽ không có hiệu lực trên bàn đàm phán renewal.
4. Sáu tháng một lần, hãy kiểm tra lại chính hệ thống metrics: xóa những chỉ số không ai xem, bổ sung những chỉ số liên tục bị hỏi đến.
