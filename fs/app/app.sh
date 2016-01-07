#ifconfig eth0 172.18.16.107 netmask 255.255.255.0
#/etc/Wireless/wpa_supplicant.sh 
#mount -t jffs2 /dev/mtdblock3  /zmodo
#mount -t tmpfs tmfs /app
#cp /zmodo/* /app/ -rf
#if [ -f /app/App3518 ]; then
#        echo "application hi3518 is exist!"
#fi
#telnetd &
#mount -t tmpfs tmpfs /tmp
#ifconfig eth0 192.168.21.8 netmask 255.255.255.0
#route add default gw 192.168.21.1
#telnetd &
cp /app/upgrade /tmp
mkdir -p /config/run/wpa_supplicant/
mount -t tmpfs tmfs /system 
cd /app/wifi/driver/ 
./load_wifi_driver.sh
cd /app/hi3518
./load3518e -i
cd /app
./message&
./App3518&

