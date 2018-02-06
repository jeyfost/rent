jQuery(document).ready(function() {
	function photoChanger() {
		var img1 = jQuery('#flat1img');
		var img2 = jQuery('#flat2img');
		var img3 = jQuery('#flat3img');
		var img4 = jQuery('#flat4img');
		var img5 = jQuery('#flat5img');
		var sb1 = jQuery('#sliderButton1');
		var sb2 = jQuery('#sliderButton2');
		var slideWrap = jQuery('#slideWrap');
		var text = jQuery('#greetingsText');
		var button1 = jQuery('#roundButton1');
		var button2 = jQuery('#roundButton2');
		var switch1 = jQuery('#switch1B');
		var switch2 = jQuery('#switch2B');
		var switch3 = jQuery('#switch3B');
		var switch4 = jQuery('#switch4B');
		var switch5 = jQuery('#switch5B');
		
		sb1.click(function() {
			if(sb1.attr('name') != 'active') {
				slideWrap.fadeOut('500');
				text.fadeOut('500');
				button1.fadeOut('500');
				button2.fadeOut('500');
				
				setTimeout(function(){
						img1.attr('src', 'images/appartments/flat11.jpg');
						img2.attr('src', 'images/appartments/flat12.jpg');
						img3.attr('src', 'images/appartments/flat13.jpg');
						img4.attr('src', 'images/appartments/flat14.jpg');
						img5.attr('src', 'images/appartments/flat15.jpg');
						switch1.attr('src', 'images/appartments/preview/flat11.jpg');
						switch2.attr('src', 'images/appartments/preview/flat12.jpg');
						switch3.attr('src', 'images/appartments/preview/flat13.jpg');
						switch4.attr('src', 'images/appartments/preview/flat14.jpg');
						switch5.attr('src', 'images/appartments/preview/flat15.jpg');
						sb1.attr('name', 'active');
						sb2.attr('name', 'notActive');
						button1.attr('src', 'images/blueRoundButton.png');
						button2.attr('src', 'images/roundButton.png');
						jQuery('#b1bt').css('color', '#62aab8');
						jQuery('#b1st').css('color', '#62aab8');
						jQuery('#b2bt').css('color', '#5f5f5f');
						jQuery('#b2st').css('color', '#5f5f5f');
						text.html('������������� ������ �������� ����������� � ������ ������� �� ������ ���� ���������� �� ������ ��. ��������, 12 � 10-�� ������� ��������� ���� �� 7-� �����.<br /><br />������� �������� � 46 �.��. ������� ������� � ������� � ��������� ������. ������� ������� ����������� ������� � ��������������� ��������� � ������� �����.<br /><br />�������� ����: 2 + 2 + 1.<br /><br />������� �� ����������� ��� ����������: ���, �����������, ���������� ������, ������ ������� �������. ���� ������, ��������� � ����� ���� �� ������� ����.<br /><br />� �������� �������� ����������� ����������, ������� ����������, ������ � ���������� �����.<br /><br />�������� ����������� ���������� ���������� ADSL + Wi-Fi � �������������� ���������� ��������, � ������������� IP-������������, ����������� ��������.<br /><br />� ���������������� �������� ���������:<br /><ul><li>���� "����������" � ���������� ����� � ������� ������, ���� � �������� �����/����������� ����� ����;</li><li>��������� ��������� (DOLBY, 3D);</li><li>��������������� �������� ��� �������� (��������, ����, ����, �������);</li><li>��� � ���������;</li><li>������ ��������.</li></ul>� ������� �����������:<br /><ul><li>��������� ��������; </li><li>���;</li> <li>�������� ������;</li><li>����������� ����������� �����;</li><li>����, �����;</li><li>������ �������;</li><li>����������� ������;</li><li>����;</li><li>���������.</li></ul><br />�������� ������� ����������� ������ �� ������� � ��������� �� �������� �� ��������������� ����������.<br /><br /><b style="color: #62aab8;">���������: 20 �.�. � �����.</b>');
					}, 500);
					
				slideWrap.fadeIn('500');
				text.fadeIn('500');
				button1.fadeIn('500');
				button2.fadeIn('500');
			}
		});
		
		sb2.click(function() {
			if(sb2.attr('name') != 'active') {
				slideWrap.fadeOut('500');
				text.fadeOut('500');
				button1.fadeOut('500');
				button2.fadeOut('500');
				
				setTimeout(function(){
						img1.attr('src', 'images/appartments/flat21.jpg');
						img2.attr('src', 'images/appartments/flat22.jpg');
						img3.attr('src', 'images/appartments/flat23.jpg');
						img4.attr('src', 'images/appartments/flat24.jpg');
						img5.attr('src', 'images/appartments/flat25.jpg');
						switch1.attr('src', 'images/appartments/preview/flat21.jpg');
						switch2.attr('src', 'images/appartments/preview/flat22.jpg');
						switch3.attr('src', 'images/appartments/preview/flat23.jpg');
						switch4.attr('src', 'images/appartments/preview/flat24.jpg');
						switch5.attr('src', 'images/appartments/preview/flat25.jpg');
						sb1.attr('name', 'notActive');
						sb2.attr('name', 'active');
						button1.attr('src', 'images/roundButton.png');
						button2.attr('src', 'images/blueRoundButton.png');
						jQuery('#b1bt').css('color', '#5f5f5f');
						jQuery('#b1st').css('color', '#5f5f5f');
						jQuery('#b2bt').css('color', '#62aab8');
						jQuery('#b2st').css('color', '#62aab8');
						text.html('������������� ������ �������� ����������� � ������ ������� �� ������ ��. ����������, 4.<br /><br />������� �������� � 60 �.��. ������� ������� ����������� ������� � ��������������� ��������� � �����.<br /><br />�������� ����: 2 + 2 + 2 + 1.<br /><br />������� �� ����������� ��� ����������: ���, �����������, ���������� ������, ��-������ � �������� ��, DVD, ����������� �����, ������ ������� �������.<br /><br />� �������� �������� ����������� ����������. ������ � ���������� � �����.<br /><br />�������� ����������� ���������� ���������� ADSL + Wi-Fi � �������������� ���������� ��������.<br /><br />� ���������������� �������� ���������:<br /><ul><li>���� "����������" � ���������� �����, ������� ������, ���� � �������� �����/����������� ����� ����;</li><li>��������� ��������� (DOLBY, 3D);</li><li>��������������� �������� ��� �������� (��������, ����, ����, �������);</li><li>��� � ���������;</li><li>������ ��������.</li></ul>� ������� �����������:</br /><ul><li>��������� ��������;</li><li>���;</li><li>�������� ������;</li><li>����������� ����������� �����;</li><li>����, �����;</li><li>������ �������;</li><li>����������� ������;</li><li>����;</li><li>���������.</li></ul><br />�������� ������� ����������� ������ �� ������� � ��������� �� �������� �� ��������������� ����������.<br /><br /><b style="color: #62aab8">���������: 40 �.�. � ����� � ������.</b>');
					}, 500);
				
				slideWrap.fadeIn('500');
				text.fadeIn('500');
				button1.fadeIn('500');
				button2.fadeIn('500');
			}
		});
	}
	
	photoChanger();
	
});